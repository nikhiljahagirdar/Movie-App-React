import Constants from '../constants/index'



export default function MovieCastReducer(state = {}, action) {
  switch(action.type) {
    case Constants.FETCH_MOVIES_CAST_REQUEST:
    return action.payload;
    case Constants.FETCH_MOVIES_CAST_SUCCESS:
    return action.payload;
    case Constants.FETCH_MOVIES_CAST_FAIL:
    return action.payload;
    default:
    return state;
  }
}