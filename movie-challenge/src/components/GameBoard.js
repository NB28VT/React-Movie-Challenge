import React, { Component } from 'react';
import MoviePicker from './MoviePicker';
import CastPicker from './CastPicker';

class GameBoard extends React.Component {
  selectMovie(movieData, castData){
    this.props.selectMovie(movieData, castData);
  }
  // TODO: CAST COMPONENTS SHOULD HOLD LOGIC FOR RANDOMIZING CAST NAMES
  render(){
    if (this.props.castData.length > 0) {
      return(<CastPicker castData={this.props.castData}/>)
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker movieChoices={this.props.movieChoices} selectMovie={this.selectMovie.bind(this)}/>)
    } else {
      return (<h3>Welcome to Movie Challenge! Search movies to get started!</h3>)
    }
  }
}

export default GameBoard
