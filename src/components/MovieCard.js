import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { movieData } = props;
    const { Poster, Title, Actor, Year, imdbID } = movieData || {};
    return (<>
        <div className="movie-card" onClick={() => props.setSelectedMovie(imdbID)}>
            <img className="movie-poster" src={Poster} alt="" />
            <h4>{Title}</h4>
            <h4>{Actor}</h4>
            <h4>{Year}</h4>

            <Link to={`movie/${imdbID}`}>View More </Link>
        </div>
    </>
    )
}

export default MovieCard
