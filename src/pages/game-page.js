import React from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap'

import PageHeader from '../components/page-header';
import PageSideBar from '../components/page-side-bar';
import GamePageDisplay from '../components/game-page-display';
import MapModal from '../components/map-modal';

class GamePage extends React.Component {


  render() {
    const gameId = this.props.match.params.gameId;
    const game = this.props.gamesList.find(g => g.bggId == gameId);
    return (
      <div id="game-page">
        <PageHeader hidden={false}/>
        <PageHeader hidden={true}/>
        <MapModal />
        <Row>
          <Col>
            <GamePageDisplay {...game} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    gamesList: state.games.allGamesList
});

export default connect(mapStateToProps)(GamePage);