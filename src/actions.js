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
    console.log('res ok in fetchallgames', gamesList)
    dispatch(fetchGamesSuccess(gamesList));
  });
};
