import React from "react";
import axios from "axios"

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      year: undefined
    }
    this.searchBarUpdateTitle = this.searchBarUpdateTitle.bind(this)
    this.searchBarUpdateYear = this.searchBarUpdateYear.bind(this)
    this.fetchMovie = this.fetchMovie.bind(this)
  }

  searchBarUpdateTitle(event) {
    this.setState({
      search: event.target.value,
    })
  }

  searchBarUpdateYear(event) {
    this.setState({
      year: event.target.value,
    })
  }

  async fetchMovie(event) {
    event.preventDefault()
    try {
      console.log("props", this.props)
      // const results
      //ternairny operator that will only add year to the search request if we have a year on state.
      // {
      //   this.state.year ? results = await axios.get(`http://www.omdbapi.com/?apikey=8eaab47d&s=${this.state.search}&y=${this.state.year}`) :
      //   results = await axios.get(`http://www.omdbapi.com/?apikey=8eaab47d&s=${this.state.search}`)

      // }


      const results = await axios.get(`http://www.omdbapi.com/?apikey=8eaab47d&s=${this.state.search}&y=${this.state.year}`)

      this.props.updateSearchResults(results.data.Search)

    } catch (error) {
      console.log("You have an error", error)
    }
  }


  render() {
    console.log(this.state.search)
    return (
      <div className="searchbar-container" >
        <div>
          <h2>Movie Title</h2>
        </div>
        <div >
          <form onSubmit={this.fetchMovie} className="searchbar-inner-container">
            <div className="title-searchbar input-group">
              <label>Title:</label>
              <input value={this.state.search} onChange={this.searchBarUpdateTitle} />
            </div>
            <div className="year-searchbar input-group">
              <label>Year:</label>
              <input value={this.state.year} onChange={this.searchBarUpdateYear} />
            </div>
              <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar
