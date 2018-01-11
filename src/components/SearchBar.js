import React, { Component } from 'react';
import KeyConfig from '../config.js'

class SearchBar extends React.Component {
  submitSearch(event){
    event.preventDefault();
    const searchUrl = "https://afternoon-sands-93107.herokuapp.com/movie_search?query=" + encodeURI(this.props.searchValue);
    // TODO: ERROR HANDLING
    fetch(searchUrl).then((response) => response.json())
      .then((responseJson) => {
        const results = responseJson.results;
        if (results.length > 0) {
          this.props.updateMovieChoices(results);
        } else {
          // TODO: MAKE THIS MORE SLICK
          alert("No movies found!");
        }
      })
  }

  handleSearchValue(event) {
    this.props.updateSearchValue(event.target.value);
  }

  // TODO: AVOID BINDING SEARCH VALUE ALL THE WAY UP TO STATE?
  render(){
    return(
      <form onSubmit={this.submitSearch.bind(this)}>
        <label>
          Search:
          <input type="text" name="search" onChange={this.handleSearchValue.bind(this)} value={this.props.searchValue}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SearchBar
