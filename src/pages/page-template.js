import React from 'react';
import {Row, Col} from 'react-bootstrap'

import PageHeader from '../components/page-header';
import PageSideBar from '../components/page-side-bar';
import GameListArea from '../components/game-list-area';
import MapModal from '../components/map-modal';

export default class PageTemplate extends React.Component {
  render() {
    return (
      <div>
        <PageHeader hidden={false}/>
        <PageHeader hidden={true}/>
        <MapModal />
        <Row>
          <Col xs={3}>
            <PageSideBar />
          </Col>
          <Col>  
            <GameListArea />
          </Col>
        </Row>
      </div>
    )
  }
}