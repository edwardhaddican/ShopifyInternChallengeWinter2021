import React from "react";

class Nominations extends React.Component {
  render() {
    const nominations = this.props.nominations
    return (
      <div className="nominations-container" >
        <div>
          <h2>Nominations</h2>
        </div>
        <ul className="nominations-list">
          {nominations.length > 0 ? nominations.map(nomination => {
            return (
              <li className="single-nomination" key={nomination.imdbID}>
                <h4>{nomination.Title} {"("}{nomination.Year}{")"}</h4>
                <button onClick={() => this.props.removeNomination(nomination)}>Remove</button>
              </li>
            )
          }) : <p>Please Add Nominations</p>
          }
        </ul>
      </div>
    )
  }
}

export default Nominations
