import React, { PureComponent } from "react";
import "./Hint.css";

class Hint extends PureComponent {
  render() {
    const { next, total } = this.props.page;
    return (
      <div className="hint">
        {(function IIFE() {
          if (total === 1) {
            return (
              <div>
                apply for a{" "}
                <a href="https://github.com/settings/tokens">github token</a>{" "}
                with authoritization of "read:packages"
              </div>
            );
          } else if (next <= total) {
            return (
              <div>
                √ there are {total} pages, {next - 1} pages loadded
              </div>
            );
          } else if (next > total) {
            return <div>√ there are {total} pages, all pages loadded</div>;
          }
        })()}
      </div>
    );
  }
}

export default Hint;
