import React, { Component } from "react";
import {connect} from "react-redux";
import configHelper from '../../utils/configHelper';

class CastNCrew extends Component {
  
  constructor(props) {
    super(props);
    this.state = {casts:[],Crew:[]};
  }


  componentDidMount(){
    if(this.props.cnc.cast.cast){
        this.setState({casts:Array.from(this.props.cnc.cast.cast)});
        this.setState({crew:Array.from(this.props.cnc.cast.crew)});
    }
   }

  render() {
     
    var imageUrl=configHelper.movieSmallImgUrl;
    return (
      <div>
      <h1>{this.props.match.params.name}</h1>
        <ul className="list-group">
         
     {
        this.state.casts.map((item,index)=>{
            console.log(item);
             
         })
     }
         
         
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    cnc: state
  });
  
  
  
export default connect(mapStateToProps,null) (CastNCrew);
