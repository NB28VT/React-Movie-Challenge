import React, { Component } from 'react';

class SearchBar extends React.Component {
  submitSearch(event){
    event.preventDefault();
    const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + config.TMDB_V3_KEY + "&query=" + encodeURI(this.state.titleSearch);
    $.ajax({
      url: searchUrl,
      type: "get",
      dataType: "JSONP",
      success: function(data) {
        this.props.updateMovieChoices(data.results.slice(0,3));
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
      }.bind(this)
    })
  }

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
