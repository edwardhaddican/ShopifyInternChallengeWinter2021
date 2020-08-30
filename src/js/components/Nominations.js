import React from "react";

class Nominations extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const nominations = this.props.nominations
    return (
      <div className="nominations-container" >
        <h2>Nominations</h2>
        <ul className="nominations-list">
          {nominations.map(nomination => {
            return (
              <li className="single-nomination" key={nomination.imdbID}>
                <h4>{nomination.Title} {"("}{nomination.Year}{")"}</h4>
                <button onClick={() => this.props.removeNomination(nomination)}>Remove</button>
              </li>
            )
          })}
        </ul>

      </div>

    )

  }

}

export default Nominations
