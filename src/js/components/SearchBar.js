import React from "react";
import axios from "axios"

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      year: "",
      error: '',
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
      let url = 'http://www.omdbapi.com/?apikey=8eaab47d&s'

      if (this.state.search) {
        url = url + `&s=${this.state.search}`
      } else {
        return
      }

      if (this.state.search) {
        url = url + `&y=${this.state.year}`
      }

      const results = await axios.get(url)

      if (results.data.Error) {
        this.setState({
          error: results.data.Error
        })
      } else {
        this.setState({
          error: ""
        })
        this.props.updateSearchResults(results.data.Search)
      }
    } catch (error) {
      console.log("You have an error", error)
    }
  }

  render() {
    return (
      <div className="searchbar-container" >
        <div>
          <h2>Movie Title</h2>
          {this.state.error ? <h3 className="banner-container">{this.state.error}</h3> : null}
        </div>
        <div >
          <form onSubmit={this.fetchMovie} className="searchbar-inner-container">
            <div className="title-searchbar input-group">
              <label>Title:</label>
              <input value={this.state.search} required onChange={this.searchBarUpdateTitle} />
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
