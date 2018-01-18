import React, { Component } from 'react';
import {API_ROOT} from '../api-config';

class MovieChoice extends React.Component {

  render() {
    return(
      <img src={thumbnailUrl} alt={this.props.movieData.title} className="img-thumbnail movieChoice" onClick={this.props.selectMovie(this.props.movieID)}/>
    )
  }
}

export default MovieChoice
