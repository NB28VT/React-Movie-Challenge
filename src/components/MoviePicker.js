import React, { Component } from 'react';
import MovieChoice from './MovieChoice'
import {API_ROOT} from '../api-config';

class MoviePicker extends React.Component {
  selectMovie(movieData) {
    const castUrl = `${API_ROOT}/movie_data?movie_id=` + movieData.id;
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
      <div>
        <div>

        </div>
        <div className="moviePicker">
          <h1>Select Film:</h1>
          {movieChoices.map((movieChoice) => (
            <MovieChoice movieData={movieChoice} selectMovie={this.selectMovie.bind(this)}/>
          ))}
        </div>
      </div>
    )
  }
}

export default MoviePicker
