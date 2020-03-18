import React, { PureComponent } from "react";
import "./LoadMoreButton.css";

class LoadMoreButton extends PureComponent {
  render() {
    const { loadding, loadMore } = this.props;
    const { next, total } = this.props.page;
    const whetherLastPage = next === total;
    return (
      <div className="loadMore">
        <button
          className={
            whetherLastPage || loadding ? "disabledButton" : "abledButton"
          }
          onClick={loadMore}
        >
          more
        </button>
        <div className={loadding ? "loadding" : "notLoadding"}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadMoreButton;
