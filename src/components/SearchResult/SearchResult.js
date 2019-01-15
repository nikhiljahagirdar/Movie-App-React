import React, { Component } from 'react'
import {connect} from 'react-redux'
import {popularMovieActions} from '../../actions/popularMovieActions';
import Card from '../card/Card'
import '../PopularMovies/popularmovies.css'

class SearchResult extends Component {
    constructor(props){
        super(props);
    }
  
   componentDidMount(){
    this.props.getHomeMov({title:"",pageNo:1});
   }
  
 
    

  render() {
    let nav=this.props.doNav;
    const allMovies=this.props.homeFilms.homeMovies;
   
    return (
     
           <div className="d-flex flex-wrap">
            {
                allMovies.results &&
                allMovies.results.map((item,index) => {

              return <Card key={index} film={item}  />
              })

            }
            </div>
        
        )

  }

}
const mapStateToProps = state => ({
    homeFilms: state
  });
  
  const mapDispatchToProps = dispatch => ({
    getHomeMov: (data) => dispatch(popularMovieActions.SearchMovies(data)),
   
  });
  
export default connect(mapStateToProps,mapDispatchToProps) (SearchResult);