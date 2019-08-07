
import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap'

import PageHeader from '../components/page-header';
import PageSideBar from '../components/page-side-bar';
import DesignerDisplay from '../components/designer-page-display';

class DesignerPage extends React.Component {

  render() {
    const {designerName} = this.props.match.params
    const gameArray = this.props.gamesList.filter(g => g.designer.find(d=> d=== designerName));
    return (
      <div id="game-page">
        <PageHeader hidden={false}/>
        <PageHeader hidden={true}/>
        <Row>
          <Col xs={3}>
            <PageSideBar />
          </Col>
          <Col>
            <DesignerDisplay designerName={designerName} gameArray={gameArray} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    gamesList: state.games.allGamesList
});

export default connect(mapStateToProps)(DesignerPage);