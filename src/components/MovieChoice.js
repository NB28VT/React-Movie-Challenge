import React, { Component } from 'react';
import {API_ROOT} from '../api-config';

class MovieChoice extends React.Component {

  // TODO: prevent this multilayered passing of data all the way up
  handleSelection(movieData) {
    this.props.selectMovie(movieData);
  }

  render() {
    // this.props.movieData.poster_path.substr(1).replace(/\.jpg/, "") to remove leading "/" path before sending param an jpg of url. Pass ID only
    const thumbnailUrl = `${API_ROOT}/movie_thumbnail?poster_path=` + this.props.movieData.poster_path.substr(1).replace(/\.jpg/, "");
    return(
      <img src={thumbnailUrl} alt={this.props.movieData.title} className="img-thumbnail movieChoice" onClick={this.handleSelection.bind(this, this.props.movieData)}/>
    )
  }
}

export default MovieChoice
