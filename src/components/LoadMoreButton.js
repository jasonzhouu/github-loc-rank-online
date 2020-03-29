import React, { PureComponent } from "react";
import "./LoadMoreButton.css";

class LoadMoreButton extends PureComponent {
  render() {
    const { loadding, loadMore } = this.props;
    const { next, total } = this.props.page;
    const whetherLastPage = next > total;
    let content;
    if (loadding) {
      content = (
        <div>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else if (total !== 1) {
      if (whetherLastPage) {
        content = <div>last page</div>;
      } else {
        content = <button onClick={loadMore}>more</button>;
      }
    }

    return <div className="loadMore">{content}</div>;
  }
}

export default LoadMoreButton;
