import React, {useRef} from 'react';
import { Link, Redirect ,useHistory} from 'react-router-dom';
const axios = require('axios');

function ReviewSubCard(props) {
    
    const rate = useRef(null);
    const history = useHistory();
    function updateRatingMovie(){
        const upRate = rate.current.value;
        axios.put(`https://moviewr.herokuapp.com/updaterating/${props.id}/${upRate}`)
        .then(function (response) {
            // handle success
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
                <div className="card dock-card">
                    <div className="card-body">
                        <div className = "movie-head"> {props.name}</div>
                        <div className = "row">
                            <div className = "col-md-12">
                            Rate (1-5)
                            <select className="form-control" id="options" ref = {rate}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                                <button type="button" onClick = {updateRatingMovie}  className="btn btn-primary action-btn center-btn"> <i class="fa fa-star" aria-hidden="true"></i> Rate</button>
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
export default ReviewSubCard;