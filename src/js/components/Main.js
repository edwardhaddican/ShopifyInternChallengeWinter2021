import React from "react";
import SearchBar from "./SearchBar"
import Nominations from "./Nominations"
import Results from "./Results"
import Banner from "./Banner"

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

  componentDidMount() {
    let localStorageSearchResults = localStorage.getItem('searchResults')

    if (localStorageSearchResults) {
      let parsed = JSON.parse(localStorageSearchResults)
      this.setState({
        searchResults: parsed
      })
    }

    let localStorageNominations = localStorage.getItem('nominations')

    if (localStorageNominations) {
      let parsed = JSON.parse(localStorageNominations)
      this.setState({
        nominations: parsed
      })
    }
  }

  updateSearchResults(results) {
    this.setState({
      searchResults: results
    })
    if (this.state.searchResults.length > 0) {
      localStorage.setItem(
        'searchResults', JSON.stringify(this.state.searchResults),
      );
    }
  }

  addNomination(nomination) {
    let newNomination = [...this.state.nominations, nomination]

    this.setState({
      nominations: newNomination
    })

    if (newNomination.length > 0) {
      localStorage.setItem(
        'nominations', JSON.stringify(newNomination),
      );
    }
  }

  removeNomination(nomination) {
    let newNominations = this.state.nominations.filter(n => nomination.imdbID !== n.imdbID)

    this.setState({
      nominations: newNominations
    })

    localStorage.setItem(
      'nominations', JSON.stringify(newNominations),
    );
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="title-heading">The Shoppies!</h1>
        {this.state.nominations.length === 5 ? <Banner /> : <p></p>}
        <SearchBar updateSearchResults={this.updateSearchResults} />
        <div className="results-nomination-container">
          <Results results={this.state.searchResults} addNomination={this.addNomination} nominations={this.state.nominations} />
          <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination} />
        </div>
      </div>
    )
  }
};
