import React, { Component } from 'react';


class MovieChoice extends React.Component {

  render() {
    return(
      <img src={this.props.thumbnailUrl} alt={this.props.movieData.title} className="img-thumbnail movieChoice" onClick={this.props.selectMovie(this.props.movieID)}/>
    )
  }
}

export default MovieChoice
