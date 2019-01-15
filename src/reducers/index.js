import { combineReducers } from 'redux';
import popularMovieReducer from './popularMovie.reducer';
import TrendingMovieReducer from './trendingMovie.reducer';
import MovieCastReducer from './movieCast.reducer';
import SearchMovieReducer from './searchMovie.reducer';
import MovieByIdReducer from './movieById.reducer';


const rootReducer = combineReducers({
   
   popular: popularMovieReducer,
   trending:TrendingMovieReducer,
   cast:MovieCastReducer,
   homeMovies:SearchMovieReducer,
   selectedMovie:MovieByIdReducer,
});

export default rootReducer;