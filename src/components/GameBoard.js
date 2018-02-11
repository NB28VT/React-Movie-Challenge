import React, { Component } from 'react';
import MoviePicker from './MoviePicker';
import CastPicker from './CastPicker';

class GameBoard extends Component {
  // TODO: ADD RESET BUTTON FOR GAMEBOARD
  constructor(props){
    super(props)

    this.state = {
      movieID: null
    }
  }

  selectMovie(movieID){
    this.setState({movieID: movieID});
  }

  declareWinner(){
    this.setState({movieID: null});
    this.props.declareWinner();
  }

  resetGame(){
    this.setState({movieID: null});
    this.props.resetGame();
  }

  render(){
    if (this.state.movieID) {
      return(<CastPicker movieID={this.state.movieID} declareWinner={this.declareWinner.bind(this)} resetGame={this.resetGame.bind(this)}/>)
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker movieChoices={this.props.movieChoices} selectMovie={this.selectMovie.bind(this)} />)
    } else {
      return null;
    }
  }
}

export default GameBoard
