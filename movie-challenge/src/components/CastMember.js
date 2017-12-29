import React, { Component } from 'react';
import KeyConfig from '../config.js'

class CastMember extends React.Component {
  render() {
    const thumbnailUrl = "https://image.tmdb.org/t/p/w500" +  this.props.castMember.profile_path + "?api_key=" + KeyConfig.TMDB_V3_KEY;

    return(
      <img src={thumbnailUrl} alt={this.props.castMember.name} className="img-thumbnail castMember"/>
    )
  }
}

export default CastMember
