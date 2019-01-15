import Constants from '../constants/index'
import MovieServices from '../services/MovieServices'
  export const popularMovieActions = {
    popularMovies,
    TrendingMovies,
    MoviesCast,
    SearchMovies,
    getMovieById
   
};
function popularMovies(data) {
  console.log("in action",data);
  return dispatch => {
    dispatch(fetchPopularMovieRequest(data))
    MovieServices.getPopular(data.pageNo)
    .then(res => dispatch(fetchPopularMovieSuccess(res)))
    .catch(ex => {
     dispatch(fetchPopularMovieFail(ex))});
    
}

function fetchPopularMovieRequest(payload) {return {type: Constants.FETCH_POPULAR_MOVIES_REQUEST, payload: payload}}
function fetchPopularMovieSuccess(payload) {return {type: Constants.FETCH_POPULAR_MOVIES_SUCCESS, payload: payload}}
function fetchPopularMovieFail(err) {return {type: Constants.FETCH_POPULAR_MOVIES_FAIL, payload: {message:err}}}
}

function TrendingMovies(data) {
  return dispatch => {
    dispatch(fetchTrendingMovieRequest(data))
    MovieServices.getTrendingMovie(data.trendType,data.pageNo)
    .then(res => dispatch(fetchTrendingMovieSuccess(res)))
    .catch(ex => {
     dispatch(fetchTrendingMovieFail())});
    
}

function fetchTrendingMovieRequest(payload) {return {type: Constants.FETCH_TRENDING_MOVIES_REQUEST, payload: payload}}
function fetchTrendingMovieSuccess(payload) {return {type: Constants.FETCH_TRENDING_MOVIES_SUCCESS, payload: payload}}
function fetchTrendingMovieFail() {return {type: Constants.FETCH_TRENDING_MOVIES_FAIL, payload: {message:"error  while fetching Popular Movies"}}}
}

function MoviesCast(data) {
  return dispatch => {
    dispatch(fetchMovieCastRequest(data))
    MovieServices.getMovieCast(data.movieID)
    .then(res => dispatch(fetchMovieCastSuccess(res)))
    
    .catch(ex => {
     dispatch(fetchMovieCastFail())});
    
}

function fetchMovieCastRequest(payload) {return {type: Constants.FETCH_MOVIES_CAST_REQUEST, payload: payload}}
function fetchMovieCastSuccess(payload) {return {type: Constants.FETCH_MOVIES_CAST_SUCCESS, payload: payload}}
function fetchMovieCastFail() {return {type: Constants.FETCH_MOVIES_CAST_FAIL, payload: {message:"error  while fetching Popular Movies"}}}
}

function SearchMovies(data) {
  return dispatch => {
    dispatch(SearchMovieRequest(data))
    MovieServices.SearchMovies(data.title,data.PageNo)
    .then(res => dispatch(SearchMovieSuccess(res)))
    .catch(ex => {
     dispatch(SearchMovieFail())});
    
}

function SearchMovieRequest(payload) {return {type: Constants.FETCH_SEARCH_MOVIES_REQUEST, payload: payload}}
function SearchMovieSuccess(payload) {return {type: Constants.FETCH_SEARCH_MOVIES_SUCCESS, payload: payload}}
function SearchMovieFail() {return {type: Constants.FETCH_SEARCH_MOVIES_FAIL, payload: {message:"error  while fetching Popular Movies"}}}
}

function getMovieById(data) {
  return dispatch => {
    dispatch(getMovieIDRequest(data))
     MovieServices.getMovieById(data.movieId)
    .then(res => dispatch(getMovieIDSuccess(res)))
    .catch(ex => {
     dispatch(getMovieIDFail())});
    
}


function getMovieIDRequest(payload) {return {type: Constants.FETCH_MOVIES_ID_REQUEST, payload: payload}}
function getMovieIDSuccess(payload) {return {type: Constants.FETCH_MOVIES_ID_SUCCESS, payload: payload}}
function getMovieIDFail() {return {type: Constants.FETCH_SEARCH_MOVIES_FAIL, payload: {message:"error  while fetching Popular Movies"}}}
}

export default popularMovieActions;
