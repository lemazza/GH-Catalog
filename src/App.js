import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'

import {fetchAllGames} from './actions';

import Home from './pages/home';
import GamePage from './pages/game-page';
import DesignerPage from './pages/designer-page';

class App extends React.Component{
  componentDidMount() {
    console.log('about to fetchAllGames')
    console.log(this.props);
    this.props.dispatch(fetchAllGames())
  }

  render () {
    return (
      <Router>
        <div className="app container-fluid">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/games/:gameId" component={GamePage} />
            <Route exact path="/designers/:designerName" component={DesignerPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
