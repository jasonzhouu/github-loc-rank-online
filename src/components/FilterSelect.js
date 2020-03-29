import React, { PureComponent } from "react";
import "./FilterSelect.css";

class FilterOption extends PureComponent {
  render() {
    const { option } = this.props;
    return (
      <option value={option.value}>
        {option.value || "null"} -- {option.count}
      </option>
    );
  }
}

class FilterSelect extends PureComponent {
  render() {
    const { languageList, filter } = this.props;
    return (
      <select onChange={filter}>
        <option value="-">--language--</option>
        {languageList.map(option => (
          <FilterOption option={option} key={option.value || "null"} />
        ))}
      </select>
    );
  }
}

export default FilterSelect;
