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

  declareWinner(){
    // Pass this up.
    this.props.declareWinner();
  }

  selectMovie(movieID){
    this.setState({movieID: movieID});
  }

  render(){
    if (this.state.movieID) {
      return(<CastPicker movieID={this.state.movieID}/>)
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker movieChoices={this.props.movieChoices} selectMovie={this.selectMovie.bind(this)} />)
    } else {
      // Pop up modal?
      return null;
    }
  }
}

export default GameBoard
