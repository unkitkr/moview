import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function ReviewCard(props) {
    return (
        <div className="col-md-4" key = {props.key}>
        <Link to = {`/getdetails/${props.linkid}`}>
            <div className="card movie-card">
                <div className="card-body">
                    <div className = "movie-name">{ props.name }</div>
                </div>
            </div>
            </Link>
        </div>
    );
    
}
export default ReviewCard;