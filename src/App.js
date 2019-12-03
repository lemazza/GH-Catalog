import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchAllGames} from './actions';

import HomePage from './pages/home-page';
import SearchPage from './pages/search-page';
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
            <Switch >
              <Route exact path="/home" component={HomePage} />
              <Route path="/search/:searchTerm" component={SearchPage} />
              <Route exact path="/games/:gameId" component={GamePage} />
              <Route exact path="/designers/:designerName" component={DesignerPage} />
              <Redirect exact from="/" to="/home" />
              <Redirect  from="*" to="/home" />

            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
