import React, { Component } from 'react';
import MovieChoice from './MovieChoice'

class MoviePicker extends React.Component {
  selectMovie(movieData) {
    this.props.selectMovie(movieData);
  }

  render() {
    const movieChoices = this.props.movieChoices;
    return (
      <div className="moviePicker">
        {movieChoices.map((movieChoice) => (
          <MovieChoice movieData={movieChoice} selectMovie={this.selectMovie.bind(this)}/>
        ))}
      </div>
    )
  }
}

export default MoviePicker
