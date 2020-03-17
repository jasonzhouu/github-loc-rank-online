import React, { Component } from "react";
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
      token: ""
    };
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
    this.setToken = this.setToken.bind(this);
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
  render() {
    return (
      <div>
        <InputToken token={this.state.token} setToken={this.setToken} />
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
