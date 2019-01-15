import configHelper from '../utils/configHelper'
import axios from 'axios';
import { resolve } from 'url';

const MovieServices={
    getPopular,
    getMovieCast,
    getTrendingMovie,
    SearchMovies,
    getMovieById
    
}



function getPopular(pageNo){
   var url="https://api.themoviedb.org/3/movie/popular?api_key="+ configHelper.movieApiKey + "&language=en-US&page="+pageNo ; 
   
  return  axios.get(url,configHelper.httpheaders)
   .then(function(res) {
    return res.data;
    
  })
  .catch( function(error){
    console.log(error);
  })
}

function getMovieCast(movieId){
    var url="https://api.themoviedb.org/3/movie/"+ movieId+"/credits?api_key="+configHelper.movieApiKey
    
   return  axios.get(url,configHelper.httpheaders)
    .then(function(res) {
     return res.data;
     
   })
   .catch( function(error){
     console.log(error);
   })
 }

 function getTrendingMovie(trendType,pageNo){
  var url="https://api.themoviedb.org/3/trending/movie/"+ trendType +"?api_key="+ configHelper.movieApiKey +  "&language=en-US&page="+pageNo ; 
  
 return  axios.get(url,configHelper.httpheaders)
  .then(function(res) {
   return res.data;
   
 })
 .catch( function(error){
   console.log(error);
 })
}

function SearchMovies(query="",PageNo){
 var url= query!=="" ? 
  "https://api.themoviedb.org/3/search/movie?api_key=" + configHelper.movieApiKey +"&language=en-US&query=" + query + "&page=1&include_adult=false"
 : "https://api.themoviedb.org/3/movie/now_playing?api_key="+ configHelper.movieApiKey  + "&language=en-US&page=1"
  
 return  axios.get(url,configHelper.httpheaders)
  .then(function(res) {
   return res.data;
   
 })
 .catch( function(error){
   console.log(error);
 })
}

function getMovieById(movieID){
 
  
  var url="https://api.themoviedb.org/3/movie/"+ movieID +"?api_key="+ configHelper.movieApiKey +"&language=en-US";
  return  axios.get(url,configHelper.httpheaders)
   .then(function(res) {
    return res.data;
    })
  .catch( function(error){
    console.log(error);
  })
 }
export default MovieServices;