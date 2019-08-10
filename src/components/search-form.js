import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux';

import {resetFilteredList, sortByRating, changeTitle, changePage} from '../actions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render () {
    const {gamesList, dispatch} = this.props

    function handleChange(e) {
      const searchTerm = e.target.value
      const filteredList = gamesList.filter(g=> {
        const regex = RegExp(searchTerm, 'i')
        return regex.test(g.name)
      }).sort(sortByRating)

      dispatch(changeTitle('Search: ' + searchTerm));
      dispatch(changePage(1));
      dispatch(resetFilteredList(filteredList));
    }

    return (
      <Form inline >
        <Form.Group  controlId="gameSearch">
          <Form.Label  className="sr-only">Search Games:</Form.Label>
          <Form.Control   onChange={handleChange} type="search" placeholder="Search"/>
        </Form.Group>
        <Button variant="dark" type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </Form>
    )
  }
}



const mapStateToProps = state => ({
  gamesList: state.games.allGamesList,
});

export default connect(mapStateToProps)(SearchForm);





