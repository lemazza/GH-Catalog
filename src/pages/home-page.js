import React from 'react';
import {connect} from 'react-redux';
import PageTemplate from './page-template';


import {resetFilteredList, sortByLastModified, changeTitle, changePage} from '../actions';

class HomePage extends React.Component {
  render() {
    this.props.dispatch(resetFilteredList(this.props.gamesList.sort(sortByLastModified)));
    this.props.dispatch(changeTitle('Most Recent Additions'));
    this.props.dispatch(changePage(1));

    return (
      <div id="home-page">
        <PageTemplate />
      </div>
    )
  }
}


const mapStateToProps = state => ({
    gamesList: state.games.allGamesList
});

export default connect(mapStateToProps)(HomePage);