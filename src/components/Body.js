import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { API_KEY } from './utils/utilities';
import MovieInformation from './MovieInformation';


const Body = () => {
    const [movie, setMovie] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedMovie, setSelectedMovie] = useState();

    const getMovies = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            const data = await fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`)
            const json = await data.json();
            setMovie(json.Search)
        }
        fetchData();
    }
    return (
        <div className="body">
            <div className="search-box">
                <input className="search" type="search" placeholder="Search For a Movie" value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <form onSubmit={getMovies}>
                    <button className="search-button" type="submit">Search</button>
                </form>
            </div>
            {selectedMovie && <MovieInformation selectedMovie={selectedMovie} />}
            <div className="movie-container">
                {movie.map((mov) => (
                    <MovieCard key={mov.imdbID} movieData={mov} setSelectedMovie={setSelectedMovie} />
                ))}
            </div>
        </div>
    )
}

export default Body
