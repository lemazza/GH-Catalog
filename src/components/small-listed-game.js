import React from 'react';
import {Row, Col, Image, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router';

import './small-listed-game.css';

function SmallListedGame(props) {
  var options = { year: 'numeric', month: 'short', day: 'numeric' , }
  const dAdded = new Date(props.dateAdded)

  function handleClick(e) {
    e.preventDefault();
    console.log(props)
    props.history.push(`/games/${props.bggId}`)
  }

  return (
    <li   className="small-listed-game  mb-2">
      <div className="game-date-added">
        {dAdded.toLocaleDateString('en-US', options )}
      </div> 
      <Link className=" new-addition-link bg-dark rounded-right" to={`/games/${props.bggId}`} >
        <div className="row">

          <div className="sm-game-img-container col-5">
            <Image className="sm-game-img" fluid  src={props.image} alt={props.name} /> 
          </div>
          
          <div className="col">
            <p className="pt-1 pl-0 pb-1 pr-1 mb-0">
              <span className="text-light">{props.name}</span>
              <span> </span>
              <span className="text-secondary text-small">
                ({props.year})
              </span>   
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}


export default withRouter(SmallListedGame);
