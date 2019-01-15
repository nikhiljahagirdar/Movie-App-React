import React, { Component } from 'react'
import {connect} from 'react-redux'
import {popularMovieActions} from '../../actions/popularMovieActions';
import configHelper from '../../utils/configHelper';
import './cast.css';
import noPhoto from '../../img/noimage.jpg';
class Cast extends Component{

    constructor(props){
        super(props);
    }

    

    render(){
        
          var displayItems=[]; 
          
          if(this.props.movieCast.cast){
           
            if(this.props.DispType=="Cast"){
                displayItems=this.props.movieCast.cast.cast;
            }
            else{
                displayItems=this.props.movieCast.cast.crew;
            }
            
          }
          
              


        return (
            <div className="container">
            <ul className="list-group">
            <li className="list-group-item  list-group-item-dark">
                <span className="">
                {this.props.DispType}
                </span>
            </li>
          {
            displayItems && (
                
                displayItems.map((item,ind)=>{
                    console.log(item);
                 return(
                    <li className="list-group-item bg-dark text-light" key={item.id + "-" + ind.toString() }>
                   <span>
                     {
                        item.profile_path ? <img className="image-profile" src={configHelper.movieSmallImgUrl +item.profile_path }/> :
                        <img className="image-profile" src={noPhoto}/>
                     }  
                           
                   </span>
                   <span className="d-md-inline text-primary">
                   {item.name }
                   </span>
                   <span className="text-warning"> {"                        "}</span>
                   <span className="d-md-inline text-info pull-right">
                   {this.props.DispType=="Cast"? item.character  : item.job }
                   </span>
               </li>
                 )      
               })

          
              )

          }
          </ul>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    movieCast: state
  });
  
//   const mapDispatchToProps = dispatch => ({
//     SearchMovie: (data) => dispatch(popularMovieActions.SearchMovies(data)),
   
//   });
  
export default connect(mapStateToProps,null) (Cast);