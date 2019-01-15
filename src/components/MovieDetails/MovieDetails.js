import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import configHelper from "../../utils/configHelper";
import { popularMovieActions } from "../../actions/popularMovieActions";
import "./moviedetails.css";

export class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

   render(){
     let crews=[];
     if(this.props.movie.cast.crew){
      crews=Array.from(this.props.movie.cast.crew);
     }
    const selMovie=this.props.movie.selectedMovie;
    
    
    console.log("crew :",crews);
    const director= crews.find((item)=> item.job==='Director');
    const producer= crews.find((item)=> item.job==='Producer');
    
    console.log("Director:",director);
    console.log("producer:",producer);
    return(
       <div className="container">
       {
         selMovie && (
          <div>

          <div className="container">
           
           <div className="row">
             <div className="col-sm-10 col-md-10 col-xs-10 col-lg-10 col-xl-10 bg-dark text-light"> 
               <h2 className="text-secondary">{selMovie.title}</h2>
             </div>

             <div className="col-sm-2 col-md-2 col-xs-2 col-lg-2 col-xl-2 bg-dark text-light"> 
                <span className="text-warning">
                <i className="fas fa-star" /> {selMovie.vote_average} /{" "}
                    {selMovie.vote_count}
                </span> 
             </div>

           </div>
           
           <div className="row">

              <div className="col-sm-10 col-md-10 col-xs-10 col-lg-10 col-xl-10 bg-dark text-light"> 
                 <span className="text-primary genres">{selMovie.genres.map(item => {
                    return item.name + " ";
                  })}</span>
              
              </div>

              <div className="col-sm-2 col-md-2 col-xs-2 col-lg-2 col-xl-2 bg-dark text-light"> 
              <span className="text-warning">
                <i className="fas fa-clock" /> {selMovie.runtime} mins
                </span> 
              </div>

           </div>

          </div>
          <div className="container">
           <div className="row bg-secondary" >

             <div  className="col-sm-4 col-md-4 col-xs-4 col-lg-4 col-xl-4 text-light">
             <img
                  className="sideImg img-fluid img-thumbnail"
                  src={configHelper.movieSmallImgUrl + selMovie.poster_path}
                />
             </div>
             <div  className="col-sm-8 col-md-8 col-xs-8 col-lg-8 col-xl-8 text-light">
             <div><h3>Overview</h3></div>
             <div className="descp"> {selMovie.overview} </div>
              <hr className="text-light bg-white"/> 
             <ul className="list-group">
             <li className="list-group-item bg-dark text-light">
              <span className="p-2 disp-label">Original Title :</span>
              <span className="p-2 disp-label">{selMovie.original_title}</span>
              </li>
              { director &&
                (<li className="list-group-item bg-dark text-light">
              <span className="p-2 disp-label">Director :</span>
              <span className="p-2 disp-label">{director.name}</span>
              </li>)
              }

              { producer &&
                (<li className="list-group-item bg-dark text-light">
              <span className="p-2 disp-label">Producer :</span>
              <span className="p-2 disp-label">{producer.name}</span>
              </li>)
              }

              
              <li className="list-group-item bg-dark text-light">
              <span className="p-2 disp-label">Popularity :</span>
              <span className="p-2 disp-label">{selMovie.popularity}</span>
              </li>
              <li className="list-group-item  bg-dark text-light">
              <span className="p-2 disp-label">Release Date :</span>
                  <span className="p-2 disp-label">
                    {selMovie.release_date}
                  </span>
              </li>
              <li className="list-group-item  bg-dark text-light">
              <span className="p-2 disp-label">Budget :</span>
                  <span className="p-2 disp-label">
                    {selMovie.budget}
                  </span>
              </li>
              <li className="list-group-item  bg-dark text-light">
              <span className="p-2 disp-label">Revenue :</span>
                  <span className="p-2 disp-label">
                    {selMovie.revenue}
                  </span>
              </li>
              <li className="list-group-item  bg-dark text-light">
              <span className="p-2 disp-label">web site :</span>
                  <span className="p-2 disp-label">
                    <a href={selMovie.homepage}>{selMovie.homepage}</a>
                  </span>
              </li>

            </ul>

             </div>
             
           </div>
          </div>
          </div>
         
           
         )
       }
       </div>
    )
   }
  }


 

const mapStateToProps = state => ({
  movie: state
});

const mapDispatchToProps = dispatch => ({
  getMovie: data => dispatch(popularMovieActions.getMovieById(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
