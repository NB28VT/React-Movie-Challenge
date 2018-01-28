import React, { Component } from 'react';
import CastMember from "./CastMember"
import * as apiConfigs from '../api-config.js';
var _ = require("lodash")

class CastPicker extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      castLoaded: false,
      scrambledSelections: []
    }
  }
  // vs component did mount?
  componentWillMount() {
    this.loadMovieCast();
  }

  loadMovieCast(){
      const castUrl = `${apiConfigs.API_ROOT}/movie_data?movie_id=` + this.props.movieID;
      fetch(castUrl).then((response) => response.json())
        .then((responseJson) => {
          const cast = responseJson.cast;
          if (cast.length > 0) {
            const filteredCast = cast.slice(0,5).map(function(c){
                // Lodash!
                var filtered = _.pick(c, 'id', 'name', 'profile_path');
                filtered.correct = null;
                return filtered;
            });

            this.scrambleCastSelections(filteredCast);
          } else {
            // TODO: ADD ERROR HANDLING
            console.log("Error getting cast");
          }
        })
  }

  scrambleCastSelections(castMembers){
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

  updatePick(castID, result) {
    debugger;
    this.checkForWinner();
  }

  checkForWinner(){
    
  }

  render(){
    // TODO: NICER LOOKING LOADING MESSAGE
    if (this.state.castLoaded) {
      return(
        <div className="row castRow">
          {this.state.scrambledSelections.map((castMember) => (
            <div>
              <CastMember id={castMember.id} name={castMember.name} profileImageSource={castMember.profile_path} correct={castMember.correct} scrambledSelections={this.state.scrambledSelections} updatePick={this.updatePick.bind(this)} />
            </div>
          ))}
        </div>
      )
    } else {
      return(<h1>Loading...</h1>)
    }
  }
}


export default CastPicker
