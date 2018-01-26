import React, { Component } from 'react';
import CastMember from "./CastMember"
import * as apiConfigs from '../api-config.js';

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
            this.scrambleCastSelections(cast.slice(0,5));
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
    // TODO: RETURN ONLY VALUES WE CARE ABOUT (ID, NAME)
    this.setState({
      scrambledSelections: castArray,
      castLoaded: true
    });
  }


  render(){
    // TODO: NICER LOOKING LOADING MESSAGE
    if (this.state.castLoaded) {
      return(<h1>Loading...</h1>  )
    } else {
      return(
        <div className="row castRow">
          {this.state.scrambledSelections.map((castMember) => (
            <div>
              <CastMember castMember={castMember} scrambledSelections={this.state.scrambledSelections} registerPick={this.props.registerPick} />
            </div>
          ))}
        </div>
      )
    }
  }
}


export default CastPicker
