import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import TrendingMovies from '../../components/TrendingMovies/TrendingMovies';
const PopularMovieContainer =(props) => {
  
  
    return (
      <div>
      <Header/>
      <div className="container" style={{paddingTop:"75px"}}>
      <h3>Trending Movies</h3>
      <hr/>
      <TrendingMovies  />
      </div>
     </div>
       
        )

  

}

export default PopularMovieContainer;