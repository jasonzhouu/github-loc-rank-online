import React, {Component} from 'react';
import SortButton from './components/SortButton'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: {
        type: '',
        direction: ''
      }
    }
    this.sort = this.sort.bind(this)
  }
  sort(type) {
    let direction;
    if(this.state.sort.type === type) {
      if(this.state.sort.direction === 'ascending') {
        direction = 'descending'
      } else if(this.state.sort.direction === 'descending') {
        direction = 'ascending'
      }
    } else if (this.state.sort.type !== type) {
      direction = 'ascending'
    }
    this.setState({
      sort: {
        type,
        direction
      }
    })
  }
  render() {
    return (
      <div>
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
