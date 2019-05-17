import React from 'react';
import {Row, Col} from 'react-bootstrap'

export default function ListedGame(props) {
  console.log('ListedGame props', props)
  return (
    <div className="listed-game">
      <h4>{props.name}</h4>
      <Row>
        <Col>
          {props.year}
        </Col>
        <Col>
          {props.designer}
        </Col>      
      </Row>
    </div>
  )
}