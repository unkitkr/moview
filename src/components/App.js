import React, { Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./navbar"
import UserSpace from  "./UserSpace"
import MovieDetails from './MoviesDetails'
import MovieReviewPlane from './MovieReviewPlane'
import EditPlane from './EditPlane'
import AddCard from './AddMoviePlane'

class App extends Component {
    state = { 
    }
    
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path = "/" exact component = {UserSpace} />
                    <Route path = "/getdetails/:id" exact component = {MovieDetails} />
                    <Route path="/updaterating/:id" exact component={MovieReviewPlane} />
                    <Route path="/updatemovie/:id" exact component={EditPlane} />
                    <Route path="/AddMovies" exact component={AddCard} />
                </Switch>
            </Router>
        );
    }
}

export default App;
