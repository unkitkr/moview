import React, {useRef} from 'react';
import MovieReviewPlane from './MovieReviewPlane'
import { Link, Redirect ,Route,useHistory} from 'react-router-dom';
const axios = require('axios');

function EditCard(props) {
    const editform= useRef(null);
    const history = useHistory();
    function editMovie(e){
        e.preventDefault();
        const name = editform.current["mName"].value;
        const genre = editform.current["mGenre"].value;
        const date = editform.current["mDate"].value;
        console.log(name)
        axios.post(`https://moviewr.herokuapp.com/updatemovie`, { "id" : props.id, "genre": genre, "datereleased":date,"title":name })
        .then(function (response) {
            console.log(response)
            history.push(`/getdetails/${props.id}`);
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
                <div className="card dock-card edit-card">
                    <div className="card-body">
                        <form ref = {editform}>
                        <div className = "movie-det first-det"><b>Name:</b> <input type = "text" name = {"mName"} className = "form-control" defaultValue = {props.name}></input></div>
                        <div className = "movie-det first-det"><b>Genre:</b> <input type = "text" name = {"mGenre"} className = "form-control mb-2" defaultValue={props.genre}></input></div>
                        <div className = "movie-det"><b>Released on:</b> <input type = "date" name={"mDate"} className = "form-control" defaultValue={props.date}></input></div>
                        <div className = "row">
                            <div className = "col-md-12">
                                
                                <button type="button " onClick={editMovie} className="btn btn-primary action-btn center-btn"> <i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                            
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                </div>
            <div className="col-md-3">
            </div>
        </div>
        

        
    );
    
}
export default EditCard;