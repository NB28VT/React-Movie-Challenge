import React, { Component } from 'react';
import MovieChoice from './MovieChoice'
import KeyConfig from '../config.js'

class MoviePicker extends React.Component {
  selectMovie(movieData) {
    const castUrl = "https://afternoon-sands-93107.herokuapp.com/movie_data?movie_id=" + movieData.id;
    fetch(castUrl).then((response) => response.json())
      .then((responseJson) => {
        const cast = responseJson.cast;
        if (cast.length > 0) {
          this.props.selectMovie(movieData, cast.slice(0,5));
        } else {
          // TODO: ADD ERROR HANDLING
          console.log("Error getting cast");
        }
      })
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
