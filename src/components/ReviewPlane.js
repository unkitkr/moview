import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import AddMovies from './AddMovies'
import {connect} from 'react-redux'
import {actAddMovies,actDeleteMovies,actEditMovies,actGetAllMovies} from './Redux/actions'
import {fetchAllMovies} from './Redux/reducer'
import "./components.css";

function ReviewPlane(props) {

    
    useEffect(() => {
        // fetchMovies();
        props.fetchAllMovies();
    },[])

    const [items, setItems] = useState([])
    const fetchMovies = async () => {

        const data = await fetch("https://moviewr.herokuapp.com/getall",{
            method: 'GET',
        });
        const items = await data.json()
        console.log(items)
        setItems(items)
    };

    return (
        <div className="container review-plane">
            <div className="row">
            <AddMovies/>
            {props.items.map(item => (
                <ReviewCard key = {item.id} name = {item.title} linkid = {item.id} genre = {item.genre} rating = {item.rating} releasedon = {item.dateReleased} />
            ))}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    const items = state;
    console.log(items)
    return {items};
};   

export default connect(mapStateToProps, {fetchAllMovies})(ReviewPlane)