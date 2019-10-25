import React from 'react';
import {Button, Modal, Image} from 'react-bootstrap';
import {connect} from 'react-redux';

import {toggleMapModal} from '../actions';
import {imageFinder} from '../utils/map-image-location'

import './map-modal.css'

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
      <Modal size="lg" show={this.props.showMapModal} onHide={this.handleClose}>
        <Modal.Header className="text-white" closeButton>
          <Modal.Title>GameHaus Map</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <h3>{this.props.mapModalGameName} <br />Shelf: {this.props.mapModalLocationName}</h3>
          <Image className="img-gh-map"fluid src={imageFinder(this.props.mapModalShelf)} />
        </Modal.Body>
        <Modal.Footer className="bg-white">
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
  mapModalShelf: state.games.mapModalShelf,
  mapModalGameName: state.games.mapModalGameName
});

export default connect(mapStateToProps)(MapModal);