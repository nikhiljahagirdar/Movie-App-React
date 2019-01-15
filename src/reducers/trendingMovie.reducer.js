import Constants from '../constants/index'



export default function TrendingMovieReducer(state = {}, action) {
  switch(action.type) {
    case Constants.FETCH_TRENDING_MOVIES_REQUEST:
    return action.payload;
    case Constants.FETCH_TRENDING_MOVIES_SUCCESS:
    return action.payload;
    case Constants.FETCH_TRENDING_MOVIES_FAIL:
    return action.payload;
    default:
    return state;
  }
}