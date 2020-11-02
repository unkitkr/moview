import React, { useState, useEffect } from "react";
import DetailsCard from './detailscard'

function MoviesDetails (match) {
    const id =(match.match.params.id)
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
                 <DetailsCard key = {items.id} name = {items.title} genre = {items.genre} date = {items.dateReleased} rating = {items.rating} id = {items.id}/> 
            </div>
        );
}

export default MoviesDetails;