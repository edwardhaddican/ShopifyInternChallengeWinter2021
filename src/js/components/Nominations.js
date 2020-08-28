import React from "react";

class Nominations extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
   const nominations = this.props.nominations
    return (
      <div className="nominations-container" >
        <h3>Nominations</h3>
        {/* <div className="nominations-list">
          {nominations.map(nomination => {
            return (
              <li className="single-nomination" key={nomination.id}>

              </li>
            )
          })}
        </div> */}

      </div>

    )

  }

}

export default Nominations
