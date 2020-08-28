import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const results = this.props.results
    return (
      <div>
        <h1>Results</h1>
        <ul className="result-list">
          {results.map(result => {
            return (
              <li className="single-result" key={result.imdbID}>
                <h4>Title: {result.Title}</h4>
                <p>Year: {result.Year}</p>
              </li>
            )
          })}
        </ul>

      </div>


    )

  }

}

export default Results
