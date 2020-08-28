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
  }

  updateSearchResults(results) {
    this.setState({
      searchResults: results
    })
  }

  render() {
    console.log("serach results in main", this.state.searchResults)
    return (
      <div>
        <h1 className="title-heading">The Shoppies!</h1>
        <SearchBar updateSearchResults={this.updateSearchResults}/>
        <Results results={this.state.searchResults}/>
        <Nominations nominations={this.state.nominations} />
      </div>
    )
  }
};
