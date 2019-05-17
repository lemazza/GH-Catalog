//games-reducer
import * as actions from './actions.js'

const initialState = {
  gamesList: [],
  listSize: 10,
  currentPage: 1
}

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_GAMES_SUCCESS:
      return Object.assign({}, state, {gamesList: action.gamesList})

    default:
      return state;
  }
}