import React, { PureComponent } from "react";

class FilterOption extends PureComponent {
  render() {
    const { option } = this.props;
    return (
      <option value={option.name}>
        {option.name || 'null'} -- {option.count}
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
          <FilterOption option={option} key={option.name} />
        ))}
      </select>
    );
  }
}

export default FilterSelect;
