import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ShelfLocationButton from './shelf-location-button'

import './listed-game.css'

export default function ListedGame(props) {
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
        <Link className="text-light" to={`/designers/${des}`}>{`${des}`}</Link>
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
          <Link className="text-light" to={`/designers/${des}`}>{`${des}, `}</Link>
        )
      })
      designers = (<span>{frontOfDesArray} and {lastDesJSX}</span>);;
  }

	return (
		<div className="listed-game">
		  <Row>        
  			<Col sm={3}>
  				<div className="game-img-container">
            <Image className="listed-game-img" src={props.image} alt={props.name} />
          </div>
  			</Col>


  			<Col>
  				<Row className="listed-game-header d-flex flex-row justify-content-left bg-secondary text-dark rounded-top">
  					<h3>
              <Link className="text-light" to={`/games/${props.bggId}`}>{props.name}</Link>
            </h3>
  					<div className="listed-game-year">
  						({props.year})
  					</div>
            <ShelfLocationButton  gameName={props.name} shelf={props.shelf} locationName={props.locationName}/>
  				</Row>

  				<Row className="listed-game-designer bg-dark text-light">
  						{designers}
  				</Row>

  				<Row className="listed-game-info bg-light p-2 border border-dark rounded-bottom">
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
  			</Col>
      </Row>
		</div>
	)
}