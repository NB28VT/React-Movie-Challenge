import React, { Component } from 'react';

class CastSelections extends React.Component {
  render() {
    return (
      <div className= "btn-group-vertical castButtons" role="group">
        {this.props.selections.map((castMember) => (
           <button type="button" className="btn btn-default" onClick={this.props.registerPick.bind(this, castMember.id)}>{castMember.name}</button>
        ))}
      </div>
    )
  }
}


export default CastSelections
