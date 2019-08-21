import React from 'react';
import {Button, Modal, Image} from 'react-bootstrap';
import {connect} from 'react-redux';

import ghMap from '../images/floorplan01.pdf';

import {toggleMapModal} from '../actions';


class MapModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.dispatch(toggleMapModal(false));
  }

  render() {
    return (
      <Modal centered show={this.props.showMapModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GameHaus Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={ghMap} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>    )
  }
}

const mapStateToProps = state => ({
  showMapModal: state.games.showMapModal,
});

export default connect(mapStateToProps)(MapModal);