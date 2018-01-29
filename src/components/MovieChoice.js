import React, { Component } from 'react';
import * as apiConfigs from '../api-config.js';
import filmCountdown from '../../public/images/film_countdown.gif'
class MovieChoice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageSource: filmCountdown,
      selectable: false
    }
  }

  componentDidMount(){
    if (this.props.posterPath) {
      const moviePoster = new Image()
      moviePoster.src = `${apiConfigs.API_ROOT}/movie_thumbnail?poster_path=` + this.props.posterPath.substr(1).replace(/\.jpg/, "");
      moviePoster.onload = () => {
        this.setState({
          imageSource: moviePoster.src,
          selectable: true
        })
      }
    } else {
      // TODO: NO POSTER, SO DISPLAY PLACEHOLDER WITH NAME ONLY
    }
  }

  selectMovie(){
    // Prevent movie selection before poster loads
    if (this.state.selectable) {
      this.props.selectMovie(this.props.movieID)
    }
  }

  render() {
    return(
      <img src={this.state.imageSource}  onClick={this.selectMovie.bind(this)} alt={this.props.title} className="img-thumbnail movieChoice"/>
    )
  }
}

export default MovieChoice
