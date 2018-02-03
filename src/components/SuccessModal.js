import React, {Component} from 'react';
var Modal = require('react-bootstrap-modal')

class SuccessModal extends Component {
  render() {
    return(
      <div>
        <Modal className="successModal" show={this.props.open}  aria-labelledby="successModal">
          <Modal.Header closeButton>
            <Modal.Body>
              <h1>Success!</h1>
              <p>Great Job!</p>
            </Modal.Body>
          </Modal.Header>
          <Modal.Footer>
            <button className='btn btn-primary' onClick={this.props.resetGame}>
              Play Again
            </button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }
}

export default SuccessModal;
