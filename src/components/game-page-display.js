import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function GamePageDisplay(props) {
  //const designers =  props.designer.join(', ')

  function listDesignerLinks(desArray) {
    const displayDesigners = desArray.map(des => {
      return (
        <Link to={`/designers/${des}`}>{`${des}, `}</Link>
      )
    })
    return displayDesigners;
  }

  const designers = props.designer && props.designer.length ? listDesignerLinks(props.designer) : 'might just be uncredited'
  return (
    <div className="listed-game">
      <Row>        
        <Col xs={3}>
          <Image src={props.image} alt={props.name} fluid/>
        </Col>


        <Col>
          <Row className="listed-game-header">
            <h3>
              <Link to={`/games/${props.bggId}`}>{props.name}</Link>
            </h3>
            <div className="listed-game-year">
              ({props.year})
            </div>
          </Row>

          <Row className="listed-game-designer">
            {designers}
          </Row>

          <Row className="listed-game-info">
            <Col>
              <h5>Age</h5>
              {props.minAge}+
            </Col>
            <Col>
              <h5>Players</h5>
              {props.minPlayers}-{props.maxPlayers}
            </Col>
            <Col>
              <h5>Play Time</h5>
              {props.playTime}
            </Col>
            <Col>
              <h5>Shelf</h5>
              {props.location}
            </Col>
          </Row>
          <Row>
            {props.description}
          </Row>
        </Col>

      </Row>
    </div>
  )
}