import React, { Component } from 'react'
import {connect} from 'react-redux'
import {popularMovieActions} from '../../actions/popularMovieActions';
import Card from '../card/Card'
import './popularmovies.css'

class PopularMovies extends Component {
    constructor(props){
        super(props);
    }
  
   componentDidMount(){
    this.props.getPopMov({pageNo:1});
   }
  
 
    

  render() {
    let nav=this.props.doNav;
    const popmov=this.props.popularfilms.popular
   
    return (
     
           <div className="d-flex flex-wrap">
            {
              popmov.results &&
              popmov.results.map((item,index) => {

              return <Card key={index} film={item}  />
              })

            }
            </div>
        
        )

  }

}
const mapStateToProps = state => ({
    popularfilms: state
  });
  
  const mapDispatchToProps = dispatch => ({
    getPopMov: (data) => dispatch(popularMovieActions.popularMovies(data)),
   
  });
  
export default connect(mapStateToProps,mapDispatchToProps) (PopularMovies);