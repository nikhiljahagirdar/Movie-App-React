import React, { Component } from 'react'
import {connect} from 'react-redux'
import {popularMovieActions} from '../../actions/popularMovieActions';
import Card from '../card/Card'
import '../PopularMovies/popularmovies.css';

class TrendingMovies extends Component {
    constructor(props){
        super(props);
    }
  
    componentDidMount(){
     
        this.props.getTrendMov({trendType:"week",pageNo:1});
    }

    

  render() {
    const treMov=this.props.trendingFilms.trending;
   
    return (
           
      <div className="d-flex flex-wrap">
      {
        treMov.results &&
        treMov.results.map((item,index) => {

        return <Card key={index} film={item}  />
        })

      }
      </div>

         
        
        )

  }

}
const mapStateToProps = state => ({
    trendingFilms: state
  });
  
  const mapDispatchToProps = dispatch => ({
    getTrendMov: (data) => dispatch(popularMovieActions.TrendingMovies(data)),
   
  });
  
export default connect(mapStateToProps,mapDispatchToProps) (TrendingMovies);