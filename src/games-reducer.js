//games-reducer
import * as actions from './actions.js'

const initialState = {
  showMapModal: false,
  mapModalGameName: 'unselected',
  mapModalShelf: 'unknown',
  mapModalLocationName: 'none',
  allGamesList: [],
  filteredGamesList: [],
  listSize: 10,
  currentPage: 1,
  listTitle: 'Most Recent Additions'
}

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_GAMES_SUCCESS:
      return Object.assign({}, state, {allGamesList: action.gamesList, filteredGamesList: action.gamesList})

    case actions.RESET_FILTERED_LIST:
      return Object.assign({}, state, {filteredGamesList: action.gamesList})

    case actions.SORT_FILTERED_LIST:
      return Object.assign({}, state, {filteredGamesList: action.filteredList})

    case actions.CHANGE_PAGE:
      return Object.assign({}, state, {currentPage: action.newPage})

    case actions.CHANGE_TITLE:
      return Object.assign({}, state, {listTitle: action.newTitle})

    case actions.TOGGLE_MAP_MODAL:
      return Object.assign({}, state, {showMapModal: action.newBool})

    case actions.CHANGE_MAP_MODAL_LOCATION:
      return Object.assign({}, state, {mapModalShelf: action.newShelf, mapModalLocationName: action.newLocationName, mapModalGameName: action.newGameName})
      
    default:
      return state;
  }
}