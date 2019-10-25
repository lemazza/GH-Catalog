import React from 'react';
import {connect} from 'react-redux';
import PageTemplate from './page-template';


import {resetFilteredList, sortByLastModified, sortByRating, changeTitle, changePage} from '../actions';

class HomePage extends React.Component {
  render() {
    const {searchTerm} = this.props.match.params
    
    if (searchTerm === undefined || searchTerm === null || searchTerm ==='') {
      this.props.dispatch(resetFilteredList(this.props.gamesList.sort(sortByLastModified)));
      this.props.dispatch(changeTitle('Most Recent Additions'));
      this.props.dispatch(changePage(1));
    } else {
      const filteredList = this.props.gamesList.filter(g=> {
        const regex = RegExp(searchTerm, 'i')
        return regex.test(g.name)
      }).sort(sortByRating)
      this.props.dispatch(resetFilteredList(filteredList));
      this.props.dispatch(changeTitle('Search: ' + searchTerm));
      this.props.dispatch(changePage(1));
    }

    return (
      <div id="home-page">
        <PageTemplate />
      </div>
    )
  }
}


const mapStateToProps = state => ({
    gamesList: state.games.allGamesList
});

export default connect(mapStateToProps)(HomePage);