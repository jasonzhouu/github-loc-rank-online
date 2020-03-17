import React, { PureComponent } from "react";
import "./LoadMoreButton.css";

class LoadMoreButton extends PureComponent {
  render() {
    const { loadMore } = this.props;
    const { next, total } = this.props.page;
    const whetherLastPage = next === total;
    const className = whetherLastPage ? "disabled" : "normal";
    return (
      <button
        className={className}
        onClick={loadMore}
      >
        more
      </button>
    );
  }
}

export default LoadMoreButton;
