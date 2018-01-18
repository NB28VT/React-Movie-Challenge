import React, { Component } from 'react';
import MoviePicker from './MoviePicker';
import CastPicker from './CastPicker';

class GameBoard extends React.Component {
  render(){
    if (this.props.castData.length > 0) {
      return(<CastPicker selections ={this.props.selections} castData={this.props.castData} scrambledCast={this.props.scrambledCast} registerPick={this.props.registerPick}/>)
    } else if (this.props.titleSearch) {
      return (<MoviePicker titleSearch={this.props.titleSearch} selectMovie={this.props.selectMovie} />)
    } else {
      // Pop up modal
      return null;
    }
  }
}

export default GameBoard
