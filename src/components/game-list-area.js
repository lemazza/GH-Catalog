import React from 'react';
import ListedGame from './listed-game';
import {connect} from 'react-redux';

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

    return (
      <div>
        <h2>{this.props.title||'game list title'}</h2>
        <ul>
          {gList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    gamesList: state.games.gamesList,
    listSize: state.games.listSize,
    currentPage: state.games.currentPage
});

export default connect(mapStateToProps)(GameListArea);
