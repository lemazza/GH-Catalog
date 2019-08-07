import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ListedGame from './listed-game';

export default function DesignerDisplay(props) {
  //const designers =  props.designer.join(', ')
  console.log('props are', props);

  const listOfDesignerGames = props.gameArray.map((g,index)=> (
        <li key={index}>
          <ListedGame {...g} />
        </li>
      )
    );


  return (
    <div>
    <h2> {props.designerName}</h2>
      <ul>
        {listOfDesignerGames}
      </ul>
    </div>
  )
}