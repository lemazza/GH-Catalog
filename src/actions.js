//actions
import {API_URL} from './config';

export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const fetchGamesSuccess = gamesList => ({
  type: FETCH_GAMES_SUCCESS,
  gamesList
});


export const fetchAllGames = () => dispatch => {
  fetch(`${API_URL}/games`)
  .then((res, other) => {
    if (!res.ok) {
      console.log('res not ok in fetchallgames')
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(gamesList => {
    gamesList.sort(sortByLastModified)
    dispatch(fetchGamesSuccess(gamesList));
  });
};


export const RESET_FILTERED_LIST = 'RESET_FILTERED_LIST';
export const resetFilteredList = gamesList => ({
  type: RESET_FILTERED_LIST,
  gamesList
})

export function sortByLastModified(a, b) {
  const dateA = new Date(a.lastModified);
  const dateB = new Date(b.lastModified);
  return dateB - dateA
}

export function sortByName(a, b) {
  return a.name - b.name;
}

export function sortByRating(a, b) {
  return b.bggBayesAvg - a.bggBayesAvg;
}

export const sortByYear = (a, b) => {
  return a.year - b.year;
}

export function doNotSort (a, b) {
  return 0
}


export const SORT_FILTERED_LIST = 'SORT_FILTERED_LIST';
export const sortFilteredList = ( sortType, filteredList ) => {
  let sortFunc;
  
  switch (sortType) {
    case 'date':
      sortFunc = sortByLastModified
      break;
    case 'name':
      sortFunc = sortByName
      break;
    case 'year':
      sortFunc = sortByYear
      break;
    case 'rating':
      sortFunc = sortByRating
      break;
    default:
      sortFunc = doNotSort;
  }

  filteredList.sort(sortFunc);

  return {
  type: SORT_FILTERED_LIST,
  filteredList
  }
}

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = newPage => ({
  type: CHANGE_PAGE,
  newPage
})

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const changeTitle = newTitle => ({
  type: CHANGE_TITLE,
  newTitle
})

export const TOGGLE_MAP_MODAL = 'TOGGLE_MAP_MODAL';
export const toggleMapModal = newBool => ({
  type: TOGGLE_MAP_MODAL,
  newBool
})