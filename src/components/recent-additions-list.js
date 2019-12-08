import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';

import SmallListedGame from './small-listed-game';


class RecentAdditionsList extends React.Component {
  render() {
    const condensedList = this.props.gamesList.sort((a,b) => {
      const dAddA = new Date(a.dateAdded);
      const dAddB = new Date(b.dateAdded);
      return dAddB - dAddA
    }).slice(0, 10)  

    const gList = condensedList.map((g,index)=> (
      <SmallListedGame key={g.bggId} {...g} />      )
    );

    return (
      <ol id="recent-additions" className="list-unstyled">
        {gList}
      </ol>  
    )
  }
}

const mapStateToProps = state => ({
  gamesList: state.games.allGamesList
});

export default connect(mapStateToProps)(RecentAdditionsList);
