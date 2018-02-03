import React, { Component } from 'react';
import MoviePicker from './MoviePicker';
import CastPicker from './CastPicker';
import SuccessModal from './SuccessModal';

class GameBoard extends Component {
  // TODO: ADD RESET BUTTON FOR GAMEBOARD
  constructor(props){
    super(props)

    this.state = {
      movieID: null,
      gameWon: false
    }
  }

  selectMovie(movieID){
    this.setState({movieID: movieID});
  }

  declareWinner(){
    this.setState({gameWon: true})
  }

  render(){
    if (this.state.gameWon) {
      return(<SuccessModal open={this.state.gameWon} resetGame={this.props.resetGame}/>)
    } else if (this.state.movieID) {
      return(<CastPicker movieID={this.state.movieID} declareWinner={this.declareWinner.bind(this)}/>)
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker movieChoices={this.props.movieChoices} selectMovie={this.selectMovie.bind(this)} />)
    } else {
      // Pop up modal?
      return null;
    }
  }
}

export default GameBoard
