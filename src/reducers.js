import { 
  UPDATE_SEARCH_TERM,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

const initialState = {
  searchTerm: '',
  robots: [],
}

export function requestRobots(state=initialState, action) {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING: 
      return {...state, isPending: true};
    case REQUEST_ROBOTS_SUCCESS: 
      return {...state, robots: action.payload, isPending: false};
    case REQUEST_ROBOTS_FAILED: 
      return {...state, error: action.payload, isPending: false};
    default:
      return state;
  }
}
export function searchRobots(state=initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      console.log("in searchRobots reducer")
      return {...state, searchTerm: action.payload};
    default:
      return state;
  }
}