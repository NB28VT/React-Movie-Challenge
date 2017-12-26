import React, { Component } from 'react';
import KeyConfig from '../config.js'

class SearchBar extends React.Component {
  submitSearch(event){
    event.preventDefault();
    const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + KeyConfig.TMDB_V3_KEY + "&query=" + encodeURI(this.props.titleSearch);
    fetch(searchUrl).then(response => {
        debugger;
      }
    )
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
          <input type="text" name="search" onChange={this.handleSearchValue.bind(this)} value={this.props.titleSearch}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SearchBar
