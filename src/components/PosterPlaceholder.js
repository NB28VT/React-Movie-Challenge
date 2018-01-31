import React, { Component } from 'react';
class PosterPlaceholder extends React.Component {

  parseReleaseDate() {
    const d = new Date(this.props.release_date);
    return d.getFullYear();
  }

  render() {
    return (
      <div className="img-thumbnail movieChoice posterPlaceholder" onClick={this.props.selectMovie}>
        <h1>{this.props.name} ({this.parseReleaseDate()})</h1>
      </div>
    )
  }
}

export default PosterPlaceholder
