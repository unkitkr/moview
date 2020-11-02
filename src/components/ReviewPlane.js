import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import AddMovies from './AddMovies'
import "./components.css";

function ReviewPlane() {

    useEffect(() => {
        fetchMovies();
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
             {items.map(items => (
                 <ReviewCard key = {items.id} name = {items.title} linkid = {items.id} genre = {items.genre} rating = {items.rating} releasedon = {items.dateReleased} />
             ))}
            </div>
        </div>
    );
}

export default ReviewPlane;
