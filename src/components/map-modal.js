import React from 'react';
import {Button, Modal, Image} from 'react-bootstrap';
import {connect} from 'react-redux';

import {toggleMapModal} from '../actions';
import {imageFinder} from '../Utils/mapImageLocation'


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
          <h3>{this.props.mapModalLocationName}</h3>
          <Image src={imageFinder(this.props.mapModalShelf)} />
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
  mapModalLocationName: state.games.mapModalLocationName,
  mapModalShelf: state.games.mapModalShelf
});

export default connect(mapStateToProps)(MapModal);