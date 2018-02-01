import React, { Component } from 'react';

class CastThumbnail extends Component {
  render() {
    return (<img className={this.props.imageClass} src={this.props.imageSource} alt={this.props.name}/>)
  }
}

export default CastThumbnail
