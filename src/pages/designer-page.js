
import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap'

import PageTemplate from './page-template';


import {resetFilteredList, sortByYear, changeTitle, changePage} from '../actions';

class DesignerPage extends React.Component {

  render() {
    const {designerName} = this.props.match.params
    const gameArray = this.props.gamesList.filter(g => g.designer.find(d=> d=== designerName)).sort(sortByYear);
    this.props.dispatch(resetFilteredList(gameArray));
    this.props.dispatch(changeTitle(designerName));
    this.props.dispatch(changePage(1));

    return (
      <div id="designer-page">
        <PageTemplate />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    gamesList: state.games.allGamesList
});

export default connect(mapStateToProps)(DesignerPage);