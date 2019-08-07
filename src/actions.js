//actions
import {API_URL} from './config';

export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const fetchGamesSuccess = gamesList => ({
  type: FETCH_GAMES_SUCCESS,
  gamesList
});

function sortByDate(a, b) {
  const dateA = new Date(a.lastModified);
  const dateB = new Date(b.lastModified);
  return dateB - dateA
}

function sortByName(a, b) {
  return a.name - b.name;
}

function sortByRating(a, b) {
  return a.bggBayesAvg - b.bggBayesAvg;
}

function sortByYear(a, b) {
  return a.year - b.year;
}

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
    gamesList.sort(sortByDate)
    dispatch(fetchGamesSuccess(gamesList));
  });
};


export const RESET_FILTERED_LIST = 'RESET_FILTERED_LIST';
export const resetFilteredList = gamesList => ({
  type: RESET_FILTERED_LIST,
  gamesList
})

export const SORT_FILTERED_LIST = 'SORT_FILTERED_LIST';
export const sortFilteredList = sortType => {
  let sortFunc;
  
  switch (sortType) {
    case 'date':
      sortFunc = sortByDate
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
  }

  return {
  type: SORT_FILTERED_LIST,
  sortFunc
  }
}