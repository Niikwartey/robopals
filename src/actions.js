import { 
  UPDATE_SEARCH_TERM,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  ROBOTS_URL
} from './constants';

export function requestRobots(dispatch) {
  dispatch({type: REQUEST_ROBOTS_PENDING});

  fetch(ROBOTS_URL)
    .then(res => res.json())
    .then(robots => dispatch({
      type: REQUEST_ROBOTS_SUCCESS, 
      payload: robots
    }))
    .catch(error => dispatch({
      type: REQUEST_ROBOTS_FAILED, 
      payload: error
    }))
}

export function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: searchTerm,
  }
}
