import React, { Component } from 'react';
import MovieChoice from './MovieChoice'


class MoviePicker extends React.Component {
  render() {
      return (
        <div>
          <div className="moviePicker">
            <h1>Select Film:</h1>
            {this.props.movieChoices.map((movie) => (
              <MovieChoice posterPath={movie.poster_path} movieID={movie.id} title={movie.title} selectMovie={this.props.selectMovie}/>
            ))}
          </div>
        </div>
      )
  }
}

export default MoviePicker
