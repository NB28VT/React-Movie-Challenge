import React, { Component } from 'react';
import MoviePicker from './MoviePicker';

class GameBoard extends React.Component {
  selectMovie(movieData){
    this.props.selectMovie(movieData);
  }

  render(){
    if (this.props.castData.length > 0) {
      return (<h2>Cast Data here</h2>);
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker movieChoices={this.props.movieChoices} selectMovie={this.selectMovie.bind(this)}/>)
    } else {
      return (<h3>Welcome to Movie Challenge! Search movies to get started!</h3>)
    }
  }
}

export default GameBoard
