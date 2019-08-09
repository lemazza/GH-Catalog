import React from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'react-bootstrap';

import {changePage} from '../actions';


class Paginator extends React.Component {
  render() {
    const {gamesList, listSize, currentPage, dispatch} = this.props
    const listIndexStart = listSize * (currentPage - 1);
    const listIndexEnd = listSize * (currentPage);
    const condensedList = gamesList.slice(listIndexStart, listIndexEnd) 
    const lastpage = Math.ceil(gamesList.length / listSize);
   

    function resultsTally(listLength) {
      return `${listIndexStart + 1} - ${listIndexStart + condensedList.length} of ${listLength}`
    }

/*
  PAGE CHANGING
*/
    function incrementPage() {
      dispatch(changePage(currentPage +1));
    }

    function decrementPage() {
      dispatch(changePage(currentPage -1));
    }  

    function firstPage() {
      dispatch(changePage(1));
    }

    function lastPage() {
      dispatch(changePage(lastpage));
    }  

/*
  DISABLED STATUS
*/
    function firstStatus () {
        return (currentPage === 1) ? true : false
    }

    function prevStatus() {
      return (currentPage === 1) ? true : false
    }

    function nextStatus() {
      return (currentPage === lastpage) ? true : false
    }

    function lastStatus() {
      return (lastpage  <= 1 || currentPage === lastpage  ) ? true : false
    }

    return (
      <div className="results-pagination">
        <Pagination className="justify-content-center" >
          <Pagination.First className="" key={1} disabled={firstStatus()} onClick={firstPage} ><i className="fas fa-angle-double-left"></i></Pagination.First>
          <Pagination.Prev className="" key={2} disabled={prevStatus()} onClick={decrementPage} ><i className="fas fa-angle-left"></i></Pagination.Prev>
          <Pagination.Item className="flex-grow-1 text-center" key={3}>{resultsTally(gamesList.length)}</Pagination.Item>
          <Pagination.Next className="" key={4} disabled={nextStatus()} onClick={incrementPage} ><i className="fas fa-angle-right"></i></Pagination.Next>
          <Pagination.Last key={5} disabled={lastStatus()} onClick={lastPage}  ><i className="fas fa-angle-double-right"></i></Pagination.Last>
        </Pagination>
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

export default connect(mapStateToProps)(Paginator);