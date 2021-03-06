import React, { Component } from "react";
import GithubLOC from "github-loc-rank";
import cogoToast from "cogo-toast";

import SortButton from "./components/SortButton";
import FilterSelect from "./components/FilterSelect";
import InputToken from "./components/InputToken";
import LoadMoreButton from "./components/LoadMoreButton";
import Tbody from "./components/Tbody";
import Hint from "./components/Hint";

import extractLanguageList from "./utils/extractLanguageList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // 从local storage读取数据
    let token = localStorage.getItem("token") || "";
    let page = JSON.parse(localStorage.getItem("page")) || {
      next: 1,
      total: 1
    };
    let repositories = JSON.parse(localStorage.getItem("repositories")) || [];
    let languageList = JSON.parse(localStorage.getItem("languageList")) || [];
    let githubLOC = null;
    if (!!token && repositories.length !== 0) {
      githubLOC = new GithubLOC();
      githubLOC.restore({ page, token });
      token = "";
    }
    this.state = {
      filter: "-",
      sort: {
        type: "",
        direction: ""
      },
      loadding: false,
      token,
      repositories,
      page,
      languageList,
      githubLOC
    };
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
    this.setToken = this.setToken.bind(this);
    this.githubRequest = this.githubRequest.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  componentDidUpdate() {
    ["page", "repositories", "languageList"].forEach(item => {
      localStorage.setItem(item, JSON.stringify(this.state[item]));
    });
  }
  sort(type) {
    let direction;
    if (this.state.sort.type === type) {
      if (this.state.sort.direction === "ascending") {
        direction = "descending";
      } else if (this.state.sort.direction === "descending") {
        direction = "ascending";
      }
    } else if (this.state.sort.type !== type) {
      direction = "ascending";
    }
    this.setState({
      sort: {
        type,
        direction
      }
    });
  }
  filter(event) {
    this.setState({
      filter: event.target.value
    });
  }
  setToken(event) {
    this.setState({
      token: event.target.value
    });
  }
  async githubRequest() {
    // todo: 防止重复点击
    const githubLOC = new GithubLOC();
    try {
      this.setState({
        loadding: true
      });
      const { nextPage, pageLength, data } = await githubLOC.init(
        this.state.token
      );
      this.setState({
        loadding: false
      });
      const repositories = data;
      const languageList = extractLanguageList(repositories);
      cogoToast.success("token added");
      localStorage.setItem("token", this.state.token);
      this.setState({
        githubLOC,
        repositories,
        languageList,
        token: "",
        page: {
          next: nextPage,
          total: pageLength
        }
      });
    } catch (error) {
      cogoToast.error("invalid token or failed network");
      console.error(error);
    }
  }
  async loadMore() {
    try {
      this.setState({
        loadding: true
      });
      const { nextPage, pageLength, data } = await this.state.githubLOC.load();
      const repositories = [...this.state.repositories, ...data];
      const languageList = extractLanguageList(repositories);
      this.setState({
        repositories,
        languageList,
        page: {
          next: nextPage,
          total: pageLength
        },
        loadding: false
      });
    } catch (error) {
      cogoToast.error("invalid token or failed network");
      console.error(error);
      this.setState({
        loadding: false
      });
    }
  }
  render() {
    return (
      <div className="main">
        <InputToken
          token={this.state.token}
          setToken={this.setToken}
          githubRequest={this.githubRequest}
        />
        <Hint page={this.state.page} />
        <div className="tableContent">
          <table>
            <thead>
              <tr>
                <th>reponame</th>
                <th>
                  <FilterSelect
                    languageList={this.state.languageList}
                    filter={this.filter}
                  />
                </th>
                <th>
                  <SortButton sort={this.sort} sortState={this.state.sort}>
                    LOC
                  </SortButton>
                </th>
                <th>
                  <SortButton sort={this.sort} sortState={this.state.sort}>
                    Stars
                  </SortButton>
                </th>
              </tr>
            </thead>
            <Tbody
              repositories={this.state.repositories}
              sort={this.state.sort}
              filter={this.state.filter}
            ></Tbody>
          </table>
        </div>
        <LoadMoreButton
          loadding={this.state.loadding}
          page={this.state.page}
          loadMore={this.loadMore}
        />
      </div>
    );
  }
}

export default App;
