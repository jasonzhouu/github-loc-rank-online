import React, { PureComponent } from "react";
import "./InputToken.css";

class InputToken extends PureComponent {
  render() {
    const { token, setToken, githubRequest } = this.props;
    return (
      <div className="tokenSection">
        <input
          type="text"
          className="tokenInput"
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
