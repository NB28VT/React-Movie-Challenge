import React, { Component } from 'react';
import MoviePicker from './MoviePicker';
import CastPicker from './CastPicker';

class GameBoard extends React.Component {
  // TODO: ADD RESET BUTTON FOR GAMEBOARD
  constructor(props){
    super(props)

    this.state = {
      movieID: null
    }
  }

  componentDidMount(){
    if (this.props.movieChoices.length > 0) {
      alert("We havvvveee movies!");
    } else {
      console.log("no moobies");
    }
  }

  declareWinner(){
    // Pass this up.
    this.props.declareWinner;
  }

  selectMovie(movieID){
    this.setState({movieID: movieID});
  }


  render(){
    if (this.state.movieID) {
      // testing
      return (<h1>Awww yeah here's the movie</h1>);
      // return(<CastPicker movieID={this.state.movieID}}/>)
    } else if (this.props.movieChoices.length > 0) {
      return (<MoviePicker searchValue={this.props.movieChoices} selectMovie={this.selectMovie.bind(this)} />)
    } else {
      // Pop up modal?
      return null;
    }
  }
}

export default GameBoard
