import React, { PureComponent } from "react";

class InputToken extends PureComponent {
  render() {
    const { token, setToken, githubRequest } = this.props;
    return (
      <div>
        <input
          type="text"
          value={token}
          onChange={setToken}
          placeholder="github token"
        />
        <button onClick={githubRequest}>enter</button>
      </div>
    );
  }
}

export default InputToken;
