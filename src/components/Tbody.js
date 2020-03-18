import React, { PureComponent } from "react";
import "./Tbody.css";

class Tbody extends PureComponent {
  render() {
    const { repositories, sort, filter } = this.props;
    return (
      <tbody>
        {repositories
          .filter(repository =>
            filter === "-" ? true : repository.mainLanguage === filter
          )
          .sort((i, j) => {
            if (sort.type === "" || sort.direction === "") return true;
            let compare =
              i[sort.type.toLowerCase()] - j[sort.type.toLowerCase()];
            switch (sort.direction) {
              case "ascending":
                compare *= 1;
                break;
              case "descending":
                compare *= -1;
                break;
              default:
                break;
            }
            return compare;
          })
          .map(repository => (
            <tr key={repository.repoName}>
              <td>
                <a href={repository.htmlUrl}>{repository.repoName}</a>
              </td>
              <td>{repository.mainLanguage || "-"}</td>
              <td>{repository.loc}</td>
              <td>{repository.stars}</td>
            </tr>
          ))}
      </tbody>
    );
  }
}

export default Tbody;
