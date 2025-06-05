import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard ({movie}){

    const {isFavorite , addToFavourites, removeFavourites} = useMovieContext()
    const favorite = isFavorite(movie.imdbID)

    function onFavouriteClick(e){
        e.preventDefault()
        if(favorite) removeFavourites(movie.imdbID)
        else addToFavourites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src = {movie.Poster} alt={movie.Title}/>
            <div className="movie-overlay">
                <button className={`favourite-btn ${ favorite? "active": ""}`} onClick={onFavouriteClick}>+</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    </div>
}

export default MovieCard;