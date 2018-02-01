import React, { Component } from 'react';

class CastSelections extends Component {
  render() {
    return (
      <div className="btn-group-vertical castButtons" role="group">
        {this.props.scrambledSelections.map((castMember) => (
           <button key={castMember.id} type="button" className="btn btn-default" onClick={this.props.registerPick.bind(this, castMember.id)}>{castMember.name}</button>
        ))}
      </div>
    )
  }
}


export default CastSelections
