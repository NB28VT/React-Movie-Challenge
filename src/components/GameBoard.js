import React, { Component } from 'react';
import MoviePicker from './MoviePicker';
import CastPicker from './CastPicker';

class GameBoard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movieID: null
    }
  }

  declareWinner(){
    // Pass this up.
    this.props.declareWinner;
  }

  selectMovie(movieID){
    this.setState({movieID: movieID});
  }

  // Maybe uncessary. Needs to get passed up to app js.
  // registerPick() {
  //
  // }

  // checkForWinner(){
  //
  // }

  render(){
    if (this.state.movieID) {
      // testing
      return (<h1>Awww yeah here's the movie</h1>);
      // return(<CastPicker movieID={this.state.movieID}}/>)
    } else if (this.props.titleSearch) {
      return (<MoviePicker searchValue={this.props.searchValue} selectMovie={this.selectMovie.bind(this)} />)
    } else {
      // Pop up modal?
      return null;
    }
  }
}

export default GameBoard
