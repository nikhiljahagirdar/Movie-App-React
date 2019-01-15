import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {popularMovieActions} from '../../actions/popularMovieActions';
import { Redirect,browser} from 'react-router-dom';
import {connect} from 'react-redux'
import history from 'history';
import configHelper from '../../utils/configHelper';
import './card.css';

class Card extends React.Component{

    constructor(props){
     super(props);
     this.state={isRedirect:false};
     this.cardHandler=this.cardHandler.bind(this);
     
    }

   componentDidMount(){
    
   }

   cardHandler(){
    let selectedMovieId= this.props.film.id;
    this.props.getMovieDetails({movieId:selectedMovieId});
    this.props.getMovCast({movieID:selectedMovieId});
    this.setState({isRedirect:true});
   
    }

    getWords(lText){
        var words= lText.split(' ');
        var minWords = words.slice(0, 25);
        return minWords.join(' ');
    }

    render (){

        
       const imgPath= configHelper.movieSmallImgUrl + this.props.film.backdrop_path ;
       if(this.state.isRedirect){
           let reuri="/MovieDetails/" 
           return <Redirect to={reuri} />
       }

return(
    <div className="cust-card d-flex flex-wrap" >
    <div className="image-container">
    <img  src={imgPath} className="card-image"  onClick={this.cardHandler} />
    </div>
    <div className="card-bottom">
        <span  onClick={this.cardHandler}><h5>{this.props.film.title}</h5></span>
        <p className="card-desc">{this.getWords(this.props.film.overview)}</p>
        <span>
        <ul>
        <li><span className="yellow-font"><i className="fas fa-clock"></i>  </span> {new Date(this.props.film.release_date).toDateString()}</li>
        <li><span className="yellow-font"><i className="fas fa-star"></i> </span>  {this.props.film.vote_average}</li>
     </ul>
        </span>
    </div>
     
    </div>
       
		
)
    }
}

const mapStateToProps = state => ({
    popularfilms: state
  });
  
  const mapDispatchToProps = dispatch => ({
    getMovCast: (data) => dispatch(popularMovieActions.MoviesCast(data)),
    getMovieDetails : (data) => dispatch(popularMovieActions.getMovieById(data))
    
  });
  
export default connect(mapStateToProps,mapDispatchToProps) (Card);



