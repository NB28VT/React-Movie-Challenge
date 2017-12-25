import React, { Component } from 'react';
import MoviePicker from './MoviePicker';

class GameBoard extends React.Component {
  render(){
    if (this.props.castData.length > 0) {
      return (<h2>Cast Data here</h2>);
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker />)
    } else {
      return (<h3>Welcome to Movie Challenge! Search movies to get started!</h3>)
    }
  }
}

export default GameBoard
