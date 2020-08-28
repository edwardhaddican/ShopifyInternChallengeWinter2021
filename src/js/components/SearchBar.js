import React from "react";
import axios from "axios"

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.searchBarUpdate = this.searchBarUpdate.bind(this)
    this.fetchMovie = this.fetchMovie.bind(this)
  }

  searchBarUpdate(event) {
    this.setState({
      search: event.target.value
    })
  }

  async fetchMovie() {
    try {
      console.log("props", this.props)

      const results = await axios.get(`http://www.omdbapi.com/?apikey=8eaab47d&s=${this.state.search}`)

      this.props.updateSearchResults(results.data.Search)

    } catch (error) {
      console.log("You have an error", error)
    }
  }


  render() {
    console.log(this.state.search)
    return (
      <div className="searchbar-container" >
        <h3>Movie Title</h3>
        <input value={this.state.search} onChange={this.searchBarUpdate}></input>
        <button onClick={this.fetchMovie}>Search</button>
      </div>

    )

  }

}

export default SearchBar
