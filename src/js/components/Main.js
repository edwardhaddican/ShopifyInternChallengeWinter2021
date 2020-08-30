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

  render() {
    console.log("nominations on state", this.state.nominations)
    return (
      <div>
        <h1 className="title-heading">The Shoppies!</h1>
        <SearchBar updateSearchResults={this.updateSearchResults}/>
        <Results results={this.state.searchResults} addNomination={this.addNomination} nominations={this.state.nominations}/>
        <Nominations nominations={this.state.nominations} />
      </div>
    )
  }
};
