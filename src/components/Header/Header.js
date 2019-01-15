import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import img from '../../img/logo.jpeg';
import './header.css';
import SearchText from '../SearchText/SearchText'

class Header extends Component {
  
  render() {
    return (
      
<div className="container">
<header>
<nav className="navbar navbar-dark fixed-top navbar-expand-md navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="https://indorse-staging-bucket.s3.amazonaws.com/5bea8a8a16503800016b4d95" alt=""  style={{height:"40px",width:"40px"}}/>
        </a>
       
            <a className="navbar-brand" href="/">Movies and chill</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/">Home</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link to="popular">Popular</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="Trending">Trending</Link>
                    </li>
                    
                </ul>
                <SearchText/>
            </div>
        </div>
    </nav>
</header>
</div>
       
        )

  }

}

export default Header;