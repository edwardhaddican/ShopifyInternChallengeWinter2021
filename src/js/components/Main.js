import React from "react";
import SearchBar from "./SearchBar"
import Nominations from "./Nominations"
import Results from "./Results"

import "../../css/main.css";

export default class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      nominations: []
    }

    this.updateSearchResults = this.updateSearchResults.bind(this)
    this.addNomination = this.addNomination.bind(this)
    this.removeNomination = this.removeNomination.bind(this)
  }

  updateSearchResults(results) {
    this.setState({
      searchResults: results
    })
  }

  addNomination(nomination) {
    this.setState({
      nominations: [...this.state.nominations, nomination]
    })
  }

  removeNomination(nomination) {
    this.setState({
      nominations: this.state.nominations.filter(n => nomination.imdbID !== n.imdbID)
    })
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="title-heading">The Shoppies!</h1>
        <SearchBar updateSearchResults={this.updateSearchResults} />
        <div className="results-nomination-container">
          <Results results={this.state.searchResults} addNomination={this.addNomination} nominations={this.state.nominations} />
          <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination} />
        </div>
      </div>
    )
  }
};
