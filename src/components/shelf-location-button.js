import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {toggleMapModal} from '../actions';


class ShelfLocationButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked, current show value is ', this.props)
    this.props.dispatch(toggleMapModal(!this.props.showMapModal));
  }

  render() {
    return (
      <div className="shelf-location-btn">
        <Button onClick={this.handleClick} >{this.props.location}</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showMapModal: state.games.showMapModal,
});

export default connect(mapStateToProps)(ShelfLocationButton);