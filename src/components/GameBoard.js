import React, { Component } from 'react';
import MoviePicker from './MoviePicker';
import CastPicker from './CastPicker';

class GameBoard extends React.Component {
  render(){
    if (this.props.castData.length > 0) {
      return(<CastPicker selections ={this.props.selections} castData={this.props.castData} scrambledCast={this.props.scrambledCast} registerPick={this.props.registerPick}/>)
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker movieChoices={this.props.movieChoices} selectMovie={this.props.selectMovie} />)
    } else {
      return (<h3>Welcome to Movie Challenge! Search movies to get started!</h3>)
    }
  }
}

export default GameBoard
