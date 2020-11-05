import React from 'react';
import MovieReviewPlane from './MovieReviewPlane'
import { Link, Redirect ,Route,useHistory} from 'react-router-dom';
const axios = require('axios');

function DetailsCard(props) {
    const history = useHistory();
    function deleteMovie(){
                axios.get(`https://moviewr.herokuapp.com/deletemovie/${props.id}` )
        .then(function (response) {
            // handle success
            history.push("/");
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    return (
        <div className = "row detail-card-top">
            <div className="col-md-3" >
            </div>
                <div className="col-md-6">
                <div className="card dock-card">
                    <div className="card-body">
                        <div className = "movie-head"> {props.name}</div>
                        <div className = "movie-det first-det"><b>Genre:</b> {props.genre}</div>
                        <div className = "movie-det"><b>Released on:</b> {props.date}</div>
                        <div className = "movie-det"><b>Rated: </b>{props.rating + " ⭐"} </div>
                        <div className = "row">
                            <div className = "col-md-12">
                            <Link to = {`/updatemovie/${props.id}`}>
                                <button type="button " className="btn btn-primary action-btn"> <i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                            </Link>
                                <Link to = {`/updaterating/${props.id}`}>
                                    <button type="button" className="btn btn-primary action-btn"> <i class="fa fa-star" aria-hidden="true"></i> Rate</button>
                                </Link>
                                <button type="button" onClick = {deleteMovie} className="btn btn-danger action-btn"> <i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div className="col-md-3">
            </div>
        </div>
        

        
    );
    
}
export default DetailsCard;