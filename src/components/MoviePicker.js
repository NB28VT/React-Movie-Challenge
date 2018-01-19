import React, { Component } from 'react';
import MovieChoice from './MovieChoice'
import {API_ROOT} from '../api-config';

class MoviePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieChoices: [],
      loading: true,
      emptyResults: false
    }
  }

  componentDidMount() {
    let {titleSearch} = this.props;

    const searchUrl = `${API_ROOT}/movie_search?query=` + encodeURI(titleSearch);
    fetch(searchUrl).then((response) => response.json())
      .then((responseJson) => {
        const results = responseJson.results;
        if (results.length > 0) {
          const topThree = results.slice(0,3);

          const movieChoices = topThree.map((movie) => (
            {id: movie.id, thumbnailUrl: `${API_ROOT}/movie_thumbnail?poster_path=` + movie.poster_path.substr(1).replace(/\.jpg/, ""), title: movie.title}
          ))

          this.setState({movieChoices: movieChoices});
          this.setState({loading: false});
        } else {
          this.setState({loading: false});
          this.setState({emptyResults: true});

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

    if (this.state.emptyResults) {
      return (
        <div className="noResults">
          <h1>No Results found!</h1>
        </div>
      )
    } else if (this.state.loading) {
      // Don't love this
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
            {this.state.movieChoices.map((movie) => (
              <MovieChoice thumbnailUrl={movie.thumbnailUrl} movieID={movie.id} title={movie.title} selectMovie={this.props.selectMovie}/>
            ))}
          </div>
        </div>
      )
    }
  }
}

export default MoviePicker
