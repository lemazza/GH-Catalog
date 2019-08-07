import React from 'react';
import PageHeader from '../components/page-header';
import PageSideBar from '../components/page-side-bar';
import GameListArea from '../components/game-list-area';
import {Row, Col} from 'react-bootstrap'

export default class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <PageHeader hidden={false}/>
        <PageHeader hidden={true}/>
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