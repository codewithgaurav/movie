import React, { useState, useEffect } from "react";
import { API_KEY } from "./utils/utilities";
import { useParams } from "react-router-dom";


const MovieInformation = (props) => {
    const { selectedMovie } = props;
    const [movieInfo, setMovieInfo] = useState();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
                const data = await response.json();
                setMovieInfo(data);
            }
            catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [id])

    if (!movieInfo) {
        return <div>Loading...</div>
    };

    return (
        <div className="movieInfo">
            <div className="moviePoster-container">
                <img className="moviePoster" src={movieInfo?.Poster} alt="" />
            </div>
            <div className="movie-details">
                <h1>Movie: {movieInfo?.Title}</h1>
                <h3>IMDb Rating: {movieInfo?.imdbRating}</h3>
                <h3>Language: {movieInfo?.Language}</h3>
                <h3>Released: {movieInfo?.Released}</h3>
                <h3>Runtime: {movieInfo?.Runtime}</h3>
                <h3>Genre: {movieInfo?.Genre}</h3>
                <h3>Director: {movieInfo?.Director}</h3>
                <h3>Actors: {movieInfo?.Actors}</h3>
                <h3>Description: {movieInfo?.Plot}</h3>
            </div>

        </div>
    )
}

export default MovieInformation;