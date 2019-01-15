import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Cast from '../../components/Cast/Cast'
import Header from '../../components/Header/Header';

const MovieDetailsContainer=(props)=>{
    
       
        return(
            <div className="container">
             <Header/>
               <div className="row">
                <div className="col-sm-10 col-md-10 col-xs-10 col-lg-10 col-xl-10 bg-dark text-light">
                <MovieDetails/>
                </div>

               </div>
               <div className="row">
                <div className="col-sm-10 col-md-10 col-xs-10 col-lg-10 col-xl-10 bg-dark text-light">
                <ul class="nav nav-tabs" role="tablist" >
                    <li class="nav-item">
                        <a class="nav-link active" href="#cast" role="tab" data-toggle="tab">Cast</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#crew" role="tab" data-toggle="tab">Crew</a>
                    </li>
                    
               </ul>

               <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade  active " id="cast"><Cast DispType="Cast" /></div>
                    <div role="tabpanel" class="tab-pane fade" id="crew"><Cast DispType="Crew" /></div>
                </div>
                </div>

               </div>

               
               
               
               
              
            </div>
        )
    
}



export default  MovieDetailsContainer;