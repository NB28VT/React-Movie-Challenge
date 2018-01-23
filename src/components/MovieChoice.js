import React, { Component } from 'react';
import * as apiConfigs from '../api-config.js';
import filmCountdown from '../../public/images/film_countdown.gif'
class MovieChoice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageSource: filmCountdown
    }
  }

  componentWillMount(){
    const moviePoster = new Image()
    moviePoster.src = `${apiConfigs.API_ROOT}/movie_thumbnail?poster_path=` + this.props.posterPath.substr(1).replace(/\.jpg/, "");
    moviePoster.onload = () => {
      this.setState({imageSource: moviePoster.src})
    }
  }
  render() {
    return(
      <img src={this.state.imageSource} alt={this.props.title} className="img-thumbnail movieChoice"/>
    )
  }
}

export default MovieChoice
