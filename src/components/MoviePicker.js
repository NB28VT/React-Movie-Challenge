import React, { Component } from 'react';
import MovieChoice from './MovieChoice'
import {API_ROOT} from '../api-config';

class MoviePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: [],
      loading: true
    }
  }

  componentDidMount() {
    let {titleSearch} = this.props;

    const searchUrl = `${API_ROOT}/movie_search?query=` + encodeURI(titleSearch);
    fetch(searchUrl).then((response) => response.json())
      .then((responseJson) => {
        const results = responseJson.results;
        if (results.length > 0) {
          this.setState({movieChoices: results.slice(0,3)});
          this.setState({loading: false});
        } else {
          // TODO: better error handling
          alert("No movies found");
        }
      })
  }

  // TODO: update
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
    // Don't love this
    if (this.state.loading) {
      return (
        <div>
          <div className="moviePicker">
              <MovieChoice thumbnailUrl={"../public/images/film_countdown.gif"}/>
              <MovieChoice thumbnailUrl={"../public/images/film_countdown.gif"}/>
              <MovieChoice thumbnailUrl={"../public/images/film_countdown.gif"}/>
          </div>
        </div>
      )

    } else {
      return (
        <div>
          <div className="moviePicker">
            <h1>Select Film:</h1>
            {this.state.movieChoices.map((movieChoice) => (
              <MovieChoice thumbnailUrl={movieChoice.thumbnailUrl} movieID={movieChoice.id} selectMovie={this.selectMovie.bind(this)}/>
            ))}
          </div>
        </div>
      )
    }
  }
}

export default MoviePicker
