import React, { Component } from 'react';
import MovieChoice from './MovieChoice'
import '../styles/movie_picker.css';


class MoviePicker extends Component {
  render() {
    return(
      <div className="container-fluid movie-picker">
        <div className="row movie-picker-top"></div>
        <div className="row movie-picker-middle">
          <div className="col-md-2"></div>
          <div className="col-md-8 poster-row">
            {this.props.movieChoices.map((movie) => (
              <MovieChoice posterClass={"img-thumbnail movie-poster"} key={movie.id} posterPath={movie.poster_path} movieID={movie.id} title={movie.title} release_date={movie.release_date} selectMovie={this.props.selectMovie}/>
            ))}
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row movie-picker-bottom"></div>
      </div>

    )
  }
}

export default MoviePicker
