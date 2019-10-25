import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import he from 'he';

import {ReactComponent as BGGLogo} from '../images/bgg-logo.svg';
import {imageFinder} from '../utils/map-image-location'

import './game-page-display.css'

export default function GamePageDisplay(props) {
  //test for info so react renders with dummy info until actual info loads
  const placeholder = {
    designer: [],
    name: '',
    image: '',
    year: '',
    bggId: '',
    description: ''
  }
  props = props.bggId ? props : placeholder;

  // could probably pull this out into a function. exists for different designer lengths
  const desLength = props.designer.length;
  let designers;
  let designerClassInfo = "text-light";
  if (desLength == 0) {
    designers = (
      <Link className={designerClassInfo} to={`/designers/(Uncredited)`}>{`(Uncredited)`}</Link>
    )
  } else if (desLength === 1) {
    designers = props.designer.map(des => {
      return (
        <Link className={designerClassInfo} to={`/designers/${des}`}>{`${des}`}</Link>
      )
    })
  } else if (desLength === 2) {
      let des1 = (<Link className={designerClassInfo} to={`/designers/${props.designer[0]}`}>{`${props.designer[0]}`}</Link>)
      let des2 = (<Link className={designerClassInfo} to={`/designers/${props.designer[1]}`}>{`${props.designer[1]}`}</Link>)
      designers = (<span>{des1} & {des2}</span>);
  } else {
      let desArray = props.designer;
      const lastDesigner = desArray.pop()
      const lastDesJSX = (<Link className={designerClassInfo} to={`/designers/${lastDesigner}`}>{`${lastDesigner}`}</Link>)
      const frontOfDesArray = desArray.map(des => {
        return (
          <Link className={designerClassInfo} to={`/designers/${des}`}>{`${des}, `}</Link>
        )
      })
      designers = (<span>{frontOfDesArray} and {lastDesJSX}</span>);;
  }

  return (
    <div>
      <Row>        
        <Col sm={3}>
          <Image className="game-img" src={props.image} alt={props.name} fluid/>
          <a className="bgg-button btn btn-primary my-2 px-0" href={`https://boardgamegeek.com/boardgame/${props.bggId}`}>
            <BGGLogo height="1.5rem" />
          </a>
        </Col>


        <Col>
          <Row className="game-header d-flex flex-row justify-content-left bg-secondary text-dark">
            <h3>
              <Link className="text-light pl-1" to={`/games/${props.bggId}`}>{props.name}</Link>
            </h3>
            <div className="game-year">
              ({props.year})
            </div>
          </Row>

          <Row className="game-designer bg-dark text-light pl-1">
            {designers}
          </Row>

          <Row className="game-info">
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
          </Row>
          <Row className="game-desc no-gutter">
            <Col className="px-0">
              <h4 className="bg-secondary text-black p-1 d-block">Description</h4>
              <p className="px-2">{he.decode(props.description)}</p>
            </Col>
          </Row>
          <Row className="game-location no-gutter">
            <Col className="px-0">
              <h4 className="bg-secondary text-black p-1 d-block">Shelf</h4>
              <Image src={imageFinder(props.shelf)} alt={props.locationName +' map'} fluid/>
            </Col>
          </Row>
        </Col>

      </Row>
    </div>
  )
}