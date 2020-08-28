import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.searchBarUpdate = this.searchBarUpdate.bind(this)
  }

  searchBarUpdate(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    console.log(this.state.search)
    return (
      <div className="searchbar-container" >
        <h3>Movie Title</h3>
        <input value={this.state.search} onChange={this.searchBarUpdate}></input>
      </div>

    )

  }

}

export default SearchBar
