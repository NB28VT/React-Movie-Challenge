import React, { Component } from 'react';
import MovieChoice from './MovieChoice'


class MoviePicker extends Component {
  render() {
    return(
      <div className="moviePicker">
        <h1>Select Film:</h1>
        {this.props.movieChoices.map((movie) => (
          <MovieChoice key={movie.id} posterPath={movie.poster_path} movieID={movie.id} title={movie.title} release_date={movie.release_date} selectMovie={this.props.selectMovie}/>
        ))}
      </div>
    )
  }
}

export default MoviePicker
