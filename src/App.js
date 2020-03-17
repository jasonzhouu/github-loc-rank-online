import React, { Component } from "react";
import GithubLOC from "github-loc-rank";
import SortButton from "./components/SortButton";
import FilterSelect from "./components/FilterSelect";
import InputToken from "./components/InputToken";
import LoadMoreButton from "./components/LoadMoreButton";

import extractLanguageList from "./utils/extractLanguageList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      sort: {
        type: "",
        direction: ""
      },
      languageList: [],
      token: "",
      githubLOC: null,
      repositories: [],
      page: {
        next: 1,
        total: 1
      }
    };
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
    this.setToken = this.setToken.bind(this);
    this.githubRequest = this.githubRequest.bind(this);
    this.LoadMore = this.LoadMore.bind(this);
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
  async LoadMore() {
    try {
      const { nextPage, pageLength, data } = this.state.githubLOC.load();
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
        <FilterSelect
          languageList={this.state.languageList}
          filter={this.filter}
        />
        <SortButton sort={this.sort} sortState={this.state.sort}>
          LOC
        </SortButton>
        <SortButton sort={this.sort} sortState={this.state.sort}>
          Stars
        </SortButton>
        <LoadMoreButton page={this.state.page} loadMore={this.loadMore} />
      </div>
    );
  }
}

export default App;
