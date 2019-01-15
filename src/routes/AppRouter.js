import React from 'react';
import { Router, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import PopularContainer  from '../containers/PopularMovieContainer/PopularMovieContainer';
import TrendinMovieContainer  from '../containers/TrendinMovieContainer/TrendinMovieContainer';
import MovieDetailsContainer from  '../containers/MovieDetails/MovieDetailsContainer';
import createBrowserHistory from 'history/createBrowserHistory'

let history=createBrowserHistory();



const AppRouter = () => {
    return (
        <Router history={ history } >
            <div>
                <Switch>
                    <Route path="/" component={HomeContainer} exact={true} />
                    <Route path="/Popular" component={PopularContainer} />
                    <Route path="/Trending" component={TrendinMovieContainer} />
                    <Route path="/MovieDetails" component={MovieDetailsContainer} />
                    
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;