import React, { Component } from 'react';
import KeyConfig from '../config.js'

class CastMember extends React.Component {
  render() {
    const thumbnailUrl = "https://image.tmdb.org/t/p/w500" +  this.props.castMember.profile_path + "?api_key=" + KeyConfig.TMDB_V3_KEY;

    return(
      <div className= "castMember">
        <img src={thumbnailUrl} alt={this.props.castMember.name} className="img-thumbnail castMemberThumbnail"/>
        <div className= "btn-group-vertical castButtons" role="group">
          {this.props.scrambledSelections.map((scrambledCastMember) => (
             <button type="button" className="btn btn-default">{scrambledCastMember.name}</button>
          ))}
        </div>
      </div>
    )
  }
}

export default CastMember
