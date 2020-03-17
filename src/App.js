import React, { Component } from "react";
import GithubLOC from "github-loc-rank";
import SortButton from "./components/SortButton";
import FilterSelect from "./components/FilterSelect";
import InputToken from "./components/InputToken";
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
      languageList: [
        { name: "javascript", count: 1 },
        { name: "java", count: 2 }
      ],
      token: "",
      githubLOC: null,
      repositories: [],
      nextPage: 1,
      pageLength: 1
    };
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
    this.setToken = this.setToken.bind(this);
    this.githubRequest = this.githubRequest.bind(this);
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
    const githubLOC = new GithubLOC();
    try {
      const { nextPage, pageLength, data } = await githubLOC.init(
        this.state.token
      );
      const repositories = [...this.state.repositories, ...data];
      const languages = [
        // Set 参考 https://stackoverflow.com/a/43665883/7218912
        ...new Set(repositories.map(item => item.mainLanguage))
      ];
      let languageList = languages.map(language => {
        return {
          name: language,
          count: repositories.filter(
            repository => repository.mainLanguage === language
          ).length
        };
      });
      languageList.sort((i, j) => j.count - i.count);

      this.setState({
        githubLOC,
        repositories,
        languageList,
        nextPage,
        pageLength
      });
    } catch (error) {
      // todo: error 弹窗
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
      </div>
    );
  }
}

export default App;
