import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const results = this.props.results
    return (
      <div className="result-container">
        <div>
          <h2>Results</h2>
        </div>
        <div className="result-list">
          <ul>
            {results.length > 0 ? results.map(result => {

              const disabled = this.props.nominations.length >= 5 || this.props.nominations.find(n => n.imdbID === result.imdbID)

              return (
                <li className="single-result" key={result.imdbID}>
                  <h4>{result.Title} {"("}{result.Year}{")"}</h4>
                  <button onClick={() => this.props.addNomination(result)} disabled={disabled} >Nominate</button>
                </li>
              )
            }) : <p>Please Search for Movies</p>
            }
          </ul>

        </div>

      </div>


    )

  }

}

export default Results
