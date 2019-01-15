import Constants from '../constants/index';

export default function MovieByIdReducer(state = {}, action) {
  switch(action.type) {
    case Constants.FETCH_MOVIES_ID_REQUEST:
    return action.payload;
    case Constants.FETCH_MOVIES_ID_SUCCESS:
    return action.payload;
    case Constants.FETCH_MOVIES_ID_FAIL:
    return action.payload;
    default:
    return state;
  }
}