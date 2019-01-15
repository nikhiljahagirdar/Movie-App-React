import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import SearchResult from '../../components/SearchResult/SearchResult';

const HomeContainer =(props) =>{

  return(
    <div>
    <Header/>
    <div className="container-fluid" style={{paddingTop:"75px"}}>
    
    <hr/>
    <SearchResult  />
    </div>
   </div>
  )

}


export default HomeContainer;