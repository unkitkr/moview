import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function AddMovies(props) {
    return (
        <div className="col-md-4" key = {props.key}>
        <Link to = {`/addmovies`}>
            <div className="card movie-card">
                <div className="card-body">
                    <div className = "movie-name"> <i class="fa fa-plus" aria-hidden="true"></i> Add Movie</div>
                </div>
            </div>
            </Link>
        </div>
    );
    
}
export default AddMovies;