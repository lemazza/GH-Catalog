import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {toggleMapModal, changeMapModalLocation} from '../actions';

import './shelf-location-button.css';


class ShelfLocationButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(changeMapModalLocation(this.props.gameName, this.props.shelf, this.props.locationName))
    this.props.dispatch(toggleMapModal(!this.props.showMapModal));
  }

  render() {
    return (
      <div className="ml-auto align-self-center shelf-location-btn">
        <Button className="map-modal-btn btn-danger text-light " size="sm" onClick={this.handleClick} >Location</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showMapModal: state.games.showMapModal,
});

export default connect(mapStateToProps)(ShelfLocationButton);