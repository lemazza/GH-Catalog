import React from 'react';
import ListedGame from './listed-game';
import {connect} from 'react-redux';

import './game-list-area.css';

class GameListArea extends React.Component {
  render() {
    const listIndexStart = this.props.listSize * (this.props.currentPage - 1);
    const listIndexEnd = this.props.listSize * (this.props.currentPage);
    const condensedList = this.props.gamesList.slice(listIndexStart, listIndexEnd) 
    const gList = condensedList.map((g,index)=> (
        <li key={index}>
          <ListedGame {...g} />
        </li>
      )
    );

    function resultsTally(listLength) {
      return `Showing results ${listIndexStart + 1} to ${listIndexStart + condensedList.length} of ${listLength} total`
    }

    return (
      <div id="game-list-area">
        <h2>{this.props.title|| this.props.listTitle || 'search for games above'}</h2>
        <h3>{resultsTally(this.props.gamesList.length)}</h3>
        <ul>
          {gList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    gamesList: state.games.filteredGamesList,
    listSize: state.games.listSize,
    currentPage: state.games.currentPage,
    listTitle: state.games.listTitle
});

export default connect(mapStateToProps)(GameListArea);
