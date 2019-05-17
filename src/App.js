import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import GamePage from './pages/game-page';
import {fetchAllGames} from './actions';
import {connect} from 'react-redux'
import './App.css';

class App extends React.Component{
  componentDidMount() {
    console.log('about to fetchAllGames')
    console.log(this.props);
    this.props.dispatch(fetchAllGames())
  }

  render () {
    return (
      <Router>
        <div className="app container">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/games/:gameId" component={GamePage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
