import React, { Component } from 'react';
import CastMember from "./CastMember"
import '../styles/cast_picker.css';
import * as apiConfigs from '../api-config.js';
var _ = require("lodash")

class CastPicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      castLoaded: false,
      scrambledSelections: [],
      selections: []
    }
  }

  componentDidMount() {
    this.loadMovieCast();
  }

  loadMovieCast(){
      // TODO: only load first 5 cast members that have an available profile url
      const castUrl = `${apiConfigs.API_ROOT}/movie_data?movie_id=` + this.props.movieID;
      fetch(castUrl).then((response) => response.json())
        .then((responseJson) => {
          const cast = responseJson.cast;
          if (cast.length > 0) {
            const filteredCast = cast.filter(this.checkProfilePresence).slice(0,5).map(function(c){
                // Lodash!
                var filtered = _.pick(c, 'id', 'name', 'profile_path');
                // Add correct attribute to all for tracking gameplay
                filtered.correct = null;
                return filtered;
            });

            this.setState({selections: filteredCast});
            this.scrambleCastSelections(filteredCast);

          } else {
            // TODO: ADD ERROR HANDLING
            console.log("Error getting cast");
          }
        })
  }

  checkProfilePresence(castMember){
    return castMember.profile_path != null;
  }

  scrambleCastSelections(castMembers){
    // TODO: fix selections so not in the same order in the buttons
    const castArray = castMembers.slice();
    // Fisher-Yates shuffle
    var remainingCount = castArray.length, top, index;
    while(remainingCount) {
      // Pick a random remaining element
      index = Math.floor(Math.random() * remainingCount--);
      // Swap it with the current element
      top = castArray[remainingCount];
      castArray[remainingCount] = castArray[index];
      castArray[index] = top;
    }

    this.setState({
      scrambledSelections: castArray,
      castLoaded: true
    });
  }

  updatePick(selectedID, result) {
    let selections = this.state.selections.slice()
    selections.find(s => s.id === selectedID).correct = result;
    this.setState({selections: selections});
    this.checkForWinner();
  }

  checkForWinner(){
    if (this.state.selections.every(selection => selection.correct)) {
      this.props.declareWinner();
    }
  }


  render() {
    if(this.state.castLoaded) {
      return (
        <div className="container-fluid">
          <div className="row cast-picker-top"></div>
          <div className="row cast-picker-middle">
            <div className="col-md-1"></div>
            <div className="col-md-10 cast-row">

                {this.state.selections.map((castMember) => (
                  <div className="cast-member" key={castMember.id}>
                    <CastMember id={castMember.id} name={castMember.name} profileImageSource={castMember.profile_path} correct={castMember.correct} scrambledSelections={this.state.scrambledSelections} updatePick={this.updatePick.bind(this)} />
                  </div>
                ))}
  
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row game-reset"></div>
          <div className="row cast-picker-bottom"></div>
        </div>
      )
    } else {
      return(
        <h1>Loading</h1>
      )
    }
  }

  // render(){
  //   // TODO: CENTER THIS LOADING MESSAGE
  //   if (this.state.castLoaded) {
  //     return(
  //       <div>
  //         <div className="row castRow">
  //           {this.state.selections.map((castMember) => (
  //             <div key={castMember.id}>
  //               <CastMember id={castMember.id} name={castMember.name} profileImageSource={castMember.profile_path} correct={castMember.correct} scrambledSelections={this.state.scrambledSelections} updatePick={this.updatePick.bind(this)} />
  //             </div>
  //           ))}
  //           <div>
  //             <button className="btn btn-large btn-block resetButton" onClick={this.props.resetGame}>Switch Movie</button>
  //           </div>
  //         </div>
  //
  //       </div>
  //
  //     )
  //   } else {
  //     return(<h1>Loading...</h1>)
  //   }
  // }
}


export default CastPicker
