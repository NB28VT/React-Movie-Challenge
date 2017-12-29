import React, { Component } from 'react';
import CastMember from "./CastMember"

class CastPicker extends React.Component {
  scrambleCast(){
    const castArray = this.props.castData.slice();
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
    return castArray;
  }

  render(){
    const castMembers = this.props.castData;
    const scrambledSelections = this.scrambleCast();
    return(
      <div className="row castRow">
        {castMembers.map((castMember) => (
          <div>
            <CastMember castMember={castMember} scrambledSelections={scrambledSelections}/>
          </div>
        ))}
      </div>
    )

  }
}


export default CastPicker
