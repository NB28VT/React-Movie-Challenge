import React, { Component } from 'react';
import MovieChoice from './MovieChoice'


class MoviePicker extends React.Component {
  // selectMovie(movieData) {
  //   const castUrl = `${API_ROOT}/movie_data?movie_id=` + movieData.id;
  //   fetch(castUrl).then((response) => response.json())
  //     .then((responseJson) => {
  //       const cast = responseJson.cast;
  //       if (cast.length > 0) {
  //         this.props.selectMovie(movieData, cast.slice(0,5));
  //       } else {
  //         // TODO: ADD ERROR HANDLING
  //         console.log("Error getting cast");
  //       }
  //     })
  // }

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
