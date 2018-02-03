import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import '../styles/success_modal.css';

class SuccessModal extends Component {
  render() {
    return(
      <div>
        <Modal bsSize="large" show={this.props.show} dialogClassName="success-modal">
          <Modal.Body>
            <div className="container-fluid success-modal-body">
              <div className="row success-message">
                <h1>Correct!</h1>
                <h3>Great Job!</h3>
                <h3>Care to Play Again?</h3>
              </div>
              <div className="row">
                <div id="success-search-form">
                  <form onSubmit={this.props.submitSearch}>
                    <input type="text" className="success-search-bar" onChange={this.props.updateSearch}name="search"/>
                    <input className="success-search-button" type="submit" value="Search" />
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

    )
  }
}

export default SuccessModal;
