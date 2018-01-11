import React, { Component } from 'react';
import CastMember from "./CastMember"

class CastPicker extends React.Component {
  render(){
    return(
      <div className="row castRow">
        {this.props.castData.map((castMember) => (
          <div>
            <CastMember castMember={castMember} scrambledSelections={this.props.scrambledCast} registerPick={this.props.registerPick}/>
          </div>
        ))}
      </div>
    )

  }
}


export default CastPicker
