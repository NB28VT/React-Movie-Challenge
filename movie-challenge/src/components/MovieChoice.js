import React, { Component } from 'react';
import KeyConfig from '../config.js'

class MovieChoice extends React.Component {

  // TODO: prevent this multilayered passing of data all the way up
  selectMovie() {
    this.props.selectMovie(this.props.movieData);
  }

  render() {
    const thumbnailUrl = "https://image.tmdb.org/t/p/w500" +  this.props.movieData.poster_path + "?api_key=" + KeyConfig.TMDB_V3_KEY;
    return(
      <img src={thumbnailUrl} alt={this.props.movieData.title} className="img-thumbnail movieChoice" onClick={this.props.selectMovie.bind(this)}/>
    )
  }
}

export default MovieChoice
