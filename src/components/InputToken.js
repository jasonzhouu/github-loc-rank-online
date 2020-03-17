import React, { PureComponent } from "react";

class InputToken extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     token: ""
  //   };
  //   this.tokenChange = this.tokenChange.bind(this);
  // }
  // tokenChange(event) {
  //   this.setState({
  //     token: event.target.value
  //   });
  // }
  render() {
    const { token, setToken } = this.props;
    return (
      <div>
        <input
          type="text"
          value={token}
          onChange={setToken}
          placeholder="github token"
        />
        <button
          // onClick={() => {
          //   setToken(token);
          // }}
        >
          enter
        </button>
      </div>
    );
  }
}

export default InputToken;
