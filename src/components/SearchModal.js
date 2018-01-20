import React, {Component} from 'react';

class SearchModal extends Component {
  render() {
    return this.props.open ? (
      <div>
        <div role="dialog" className="searchModal">
          <div className="modalMessage">
            <h2>Welcome to</h2>
            <h1>Who's In It?</h1>
            <h3>The movie cast matching game</h3>

            <form onSubmit={this.props.submitSearch.bind(this)}>
              <input type="text" className="searchBar" onChange={this.props.updateSearch.bind(this)}name="search"/>
              <input type="submit" value="Submit" />
            </form>

            <button className="closeButton" onClick={()=> this.props.onClose()} type="button" aria-label="close">X</button>
          </div>
        </div>
      </div>

    ) : null;
  }
}

export default SearchModal;
