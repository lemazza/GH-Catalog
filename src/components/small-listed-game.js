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
      <Link className="d-inline-flex bg-dark new-addition-link rounded-right mx-2" to={`/games/${props.bggId}`} >
       
        <div className="sm-game-img-container">
          <Image className="sm-game-img mh-100 mw-100" src={props.image} alt={props.name} /> 
        </div>
        

        <p className="p-2 mb-0">
          <span className="text-light">{props.name}</span><span> </span>
          <span className="text-secondary text-small">
            ({props.year})
          </span>   
        </p>
        
      </Link>
    </li>
  )
}


export default withRouter(SmallListedGame);
