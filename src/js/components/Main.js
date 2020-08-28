import React from "react";
import SearchBar from "./SearchBar"

import "../../css/main.css";

export default class MainPage extends React.Component {
  constructor(){
    super()
    this.state = {
      searchResults: []
    }
  }

  render() {
    return (
      <div>
        <h1 className="title-heading">The Shoppies!</h1>
        <SearchBar />
      </div>
    )


  }


};
