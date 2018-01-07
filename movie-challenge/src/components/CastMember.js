import React, { Component } from 'react';
import KeyConfig from '../config.js'

class CastMember extends React.Component {
  handleCastSelection(castMember) {
    if (castMember.id === this.props.castMember.id) {
      this.props.registerPick(this.props.castMember.id, true);
    } else {
      this.props.registerPick(this.props.castMember.id, false);
    }
  }

  calculateDivClass( ){
    if (this.props.castMember.correct === true) {
        return "castMember correctAnswer";
    } else if (this.props.castMember.correct === false) {
        return "castMember wrongAnswer";
    }  else {
      return "castMember";
    }
  }

  render() {
    const thumbnailUrl = "https://afternoon-sands-93107.herokuapp.com/cast_thumbnail?profile_picture_path=" +  this.props.castMember.profile_path;
    return(
      <div className={this.calculateDivClass()}>
        <img src={thumbnailUrl} alt={this.props.castMember.name} className="img-thumbnail castMemberThumbnail"/>
        <div className= "btn-group-vertical castButtons" role="group">
          {this.props.scrambledSelections.map((scrambledCastMember) => (
             <button type="button" className="btn btn-default" onClick={this.handleCastSelection.bind(this, scrambledCastMember)}>{scrambledCastMember.name}</button>
          ))}
        </div>
      </div>
    )
  }
}

export default CastMember
