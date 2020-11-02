import React, { useState, useEffect } from "react";
import ReviewSubCard from './reviewsubcard'
function MovieReviewPlane (match) {
    const id =(match.match.params.id)
    console.log(match)
    useEffect(() => {
        fetchMovies();
    },[])

    const [items, setItems] = useState([])
    const fetchMovies = async () => {

        const data = await fetch(`http://localhost:8000/getdetails/${id}`,{
            method: 'GET',
        });
        const items = await data.json()
        console.log(items)
        setItems(items)
    };

    
        return (
            <div className = "movie-detail container">
                 <ReviewSubCard key = {items.id} name = {items.title} genre = {items.genre} date = {items.dateReleased} rating = {items.rating} id = {items.id}/> 
            </div>
        );
}

export default MovieReviewPlane;