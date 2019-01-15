import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PopularMovies from '../../components/PopularMovies/PopularMovies';



const PopularMovieContainer= (props) =>{
  
  return (
    <div>
      <Header/>
      <div className="container-fluid" style={{paddingTop:"75px"}}>
      <h3>Popular Movies</h3>
      <hr/>
      <PopularMovies  />
      </div>
     </div>
 
  )
}



export default PopularMovieContainer;