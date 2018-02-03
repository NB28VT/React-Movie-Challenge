import React, {Component} from 'react';
var Modal = require('react-bootstrap-modal')

class SearchModal extends Component {
  render() {
    return(
      <div>
        <Modal className="searchModal" show={this.props.open}  aria-labelledby="searchModal">
          <Modal.Header closeButton>
            <Modal.Title id="searchModal">Welcome to Who's In It? The movie cast matching game.</Modal.Title>
            <Modal.Body>
              <p>To get started, enter your favorite movie title below:</p>
              <form onSubmit={this.props.submitSearch}>
                <input type="text" className="searchBar" onChange={this.props.updateSearch}name="search"/>
                <input type="submit" value="Submit" />
              </form>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    )
  }
}

export default SearchModal;
