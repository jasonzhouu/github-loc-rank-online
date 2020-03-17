import React, { PureComponent } from "react";

class Tbody extends PureComponent {
  render() {
    const { repositories } = this.props;
    return (
      <tbody>
        {repositories.map(repository => (
          <tr key={repository.repoName}>
            <td>
              <a href={repository.htmlUrl}>{repository.repoName}</a>
            </td>
            <td>{repository.mainLanguage}</td>
            <td>{repository.loc}</td>
            <td>{repository.stars}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default Tbody;
