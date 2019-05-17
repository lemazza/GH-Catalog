//store
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import gamesReducer from './games-reducer'

const store = createStore(
  combineReducers({
    form: formReducer,
    games: gamesReducer,
  }),
  applyMiddleware(thunk)
);

export default store;