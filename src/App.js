import React, { Component } from "react";
import GithubLOC from "github-loc-rank";
import SortButton from "./components/SortButton";
import FilterSelect from "./components/FilterSelect";
import InputToken from "./components/InputToken";
import LoadMoreButton from "./components/LoadMoreButton";
import Tbody from "./components/Tbody";

import extractLanguageList from "./utils/extractLanguageList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "-",
      sort: {
        type: "",
        direction: ""
      },
      // 从local storage读取数据
      token: localStorage.getItem("token") || "",
      repositories: JSON.parse(localStorage.getItem("repositories")) || [],
      page: JSON.parse(localStorage.getItem("page")) || { next: 1, total: 1 },
      languageList: JSON.parse(localStorage.getItem("languageList")) || [],
      githubLOC: null
    };
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
    this.setToken = this.setToken.bind(this);
    this.githubRequest = this.githubRequest.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  componentDidUpdate() {
    localStorage.setItem("token", this.state.token);
    localStorage.setItem(
      "repositories",
      JSON.stringify(this.state.repositories)
    );
    localStorage.setItem("page", JSON.stringify(this.state.page));
    localStorage.setItem(
      "languageList",
      JSON.stringify(this.state.languageList)
    );
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
      const { nextPage, pageLength, data } = await githubLOC.init(
        this.state.token
      );
      const repositories = [...this.state.repositories, ...data];
      const languageList = extractLanguageList(repositories);
      this.setState({
        githubLOC,
        repositories,
        languageList,
        page: {
          next: nextPage,
          total: pageLength
        }
      });
    } catch (error) {
      // todo: error 弹窗
      console.error(error);
    }
  }
  async loadMore() {
    try {
      const { nextPage, pageLength, data } = await this.state.githubLOC.load();
      const repositories = [...this.state.repositories, ...data];
      const languageList = extractLanguageList(repositories);
      this.setState({
        repositories,
        languageList,
        page: {
          next: nextPage,
          total: pageLength
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <div>
        <InputToken
          token={this.state.token}
          setToken={this.setToken}
          githubRequest={this.githubRequest}
        />
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
        <LoadMoreButton page={this.state.page} loadMore={this.loadMore} />
      </div>
    );
  }
}

export default App;

// @todo: save to local storage
