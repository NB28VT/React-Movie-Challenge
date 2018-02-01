import React, { Component } from 'react';
import PosterPlaceholder from './PosterPlaceholder';
import * as apiConfigs from '../api-config.js';
import filmCountdown from '../../public/images/film_countdown.gif'
class MovieChoice extends Component {
  constructor(props){
    super(props)
    this.state = {
      imageSource: filmCountdown,
      selectable: false,
      needsPlaceholder: false

    }
  }

  componentDidMount(){
    if (this.props.posterPath) {
      const moviePoster = new Image()
      moviePoster.src = `${apiConfigs.API_ROOT}/movie_thumbnail?poster_path=` + this.props.posterPath.substr(1).replace(/\.jpg/, "");
      moviePoster.onload = () => {
        this.setState({imageSource: moviePoster.src, selectable: true})
      }
    } else {
      this.setState({ needsPlaceholder: true, selectable: true})
    }
  }

  selectMovie(){
    // Prevent movie selection before poster loads
    if (this.state.selectable) {
      this.props.selectMovie(this.props.movieID)
    }
  }

  render() {
    if (this.state.needsPlaceholder) {
      return(<PosterPlaceholder selectMovie={this.selectMovie.bind(this)} alt={this.props.title} name={this.props.title} release_date={this.props.release_date}/>)
    } else {
      return(<img src={this.state.imageSource}  onClick={this.selectMovie.bind(this)} alt={this.props.title} className="img-thumbnail movieChoice"/>)
    }

  }
}

export default MovieChoice
