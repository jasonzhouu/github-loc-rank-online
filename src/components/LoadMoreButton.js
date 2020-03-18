import React, { PureComponent } from "react";
import "./LoadMoreButton.css";

class LoadMoreButton extends PureComponent {
  render() {
    const { loadding, loadMore } = this.props;
    const { next, total } = this.props.page;
    const whetherLastPage = next > total;

    return (
      <div className="loadMore">
        {(function() {
          if (loadding) {
            return (
              <div>
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            );
          }
          if (total !== 1) {
            if (whetherLastPage) {
              return <div>last page</div>;
            } else {
              return <button onClick={loadMore}>more</button>;
            }
          }
        })()}
      </div>
    );
  }
}

export default LoadMoreButton;
