import React, {Component} from 'react';
import {API_ROOT} from '../api-config';

class SearchModal extends Component {
  // submitSearch(event){
  //   debugger;
  //   event.preventDefault();
  //   this.props.onClose();
  //   const searchUrl = `${API_ROOT}/movie_search?query=` + encodeURI(this.props.searchValue);
  //   // TODO: ERROR HANDLING
  //   fetch(searchUrl).then((response) => response.json())
  //     .then((responseJson) => {
  //       const results = responseJson.results;
  //       if (results.length > 0) {
  //         this.props.updateMovieChoices(results);
  //       } else {
  //         // TODO: MAKE THIS MORE SLICK
  //         alert("No movies found!");
  //       }
  //     })
  // }

  render() {
    return this.props.open ? (
      <div>
        <div role="dialog" className="searchModal">
          <div className="modalMessage">
            <h2>Welcome to</h2>
            <h1>Who's In It?</h1>
            <h3>The movie cast matching game</h3>

            <form onSubmit={this.props.submitSearch.bind(this)}>
              <input type="text" className="searchBar" name="search"/>
              <input type="submit" value="Submit" />
            </form>

            <button className="closeButton" onClick={()=> this.props.onClose()} type="button" aria-label="close">X</button>
          </div>
        </div>
      </div>

    ) : null;
  }
}

export default SearchModal;
