import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import {fetchAllGames} from './actions';

import HomePage from './pages/home-page';
import GamePage from './pages/game-page';
import DesignerPage from './pages/designer-page';

import './App.css';

class App extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchAllGames())
  }

  render () {
    return (
      <Router>
        <div className="app container-fluid">
          <main>
            <Route exact path="/home" component={HomePage} />
            <Route path="/home/:searchTerm" component={HomePage} />
            <Route exact path="/games/:gameId" component={GamePage} />
            <Route exact path="/designers/:designerName" component={DesignerPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
