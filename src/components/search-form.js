import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux';

import {withRouter} from 'react-router';

import {resetFilteredList, sortByRating, changeTitle, changePage} from '../actions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.defaultTerm = this.props.match.params.searchTerm
    this.autoFocus = this.defaultTerm ? 'autoFocus' : '';
  }


  handleChange(e) {
    const gamesList = this.props.gamesList;
    const dispatch = this.props.dispatch;
    const searchTerm = e.target.value;
    const filteredList = gamesList.filter(g=> {
      const regex = RegExp(searchTerm, 'i')
      return regex.test(g.name)
    }).sort(sortByRating)

    dispatch(changeTitle('Search: ' + searchTerm));
    dispatch(changePage(1));
    dispatch(resetFilteredList(filteredList));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search/${e.target.enteredTerm.value}`)
  }


 
  render () {
    return (
      <Form onSubmit={this.handleSubmit} inline >
        <Form.Group  className="mb-0" controlId="gameSearch">
          <Form.Label  className="sr-only">Search Games:</Form.Label>
          <Form.Control name="enteredTerm"  onChange={this.handleChange} autoFocus={this.autoFocus} type="search" placeholder="Search" defaultValue={this.defaultTerm} />
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

export default withRouter(connect(mapStateToProps)(SearchForm));





