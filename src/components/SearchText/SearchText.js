import React, { Component } from 'react'
import {connect} from 'react-redux'
import {popularMovieActions} from '../../actions/popularMovieActions';

class SearchText extends Component{

    constructor(props){
        super(props);
        this.state={title:""};
    }

    clickHandler(e){
        e.preventDefault();
        this.props.SearchMovie({title:this.state.title,PageNo:1});
    }

    changeHandler(e){
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
        
    }

    render(){
        return (
            <div className="form-inline">
                <input id="title" class="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.changeHandler.bind(this)} />
                <button onClick={this.clickHandler.bind(this)} class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    homeMovies: state,
  });
  
  const mapDispatchToProps = dispatch => ({
    SearchMovie: (data) => dispatch(popularMovieActions.SearchMovies(data)),
   
  });
  
export default connect(mapStateToProps,mapDispatchToProps) (SearchText);