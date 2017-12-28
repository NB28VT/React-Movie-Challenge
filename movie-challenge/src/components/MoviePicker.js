import React, { Component } from 'react';
import MovieChoice from './MovieChoice'
import KeyConfig from '../config.js'

class MoviePicker extends React.Component {
  selectMovie(movieData) {
    const castUrl = "https://api.themoviedb.org/3/movie/" + movieData.id + "/credits?api_key=" + KeyConfig.TMDB_V3_KEY;
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
