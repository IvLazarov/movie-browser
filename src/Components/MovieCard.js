import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard=({movie}) => {
    let posterURL=`http://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let ranImg='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg';
    let detailsURL=`/movies/${movie.id}`;
    
    return(
  <div className="col-lg-3 col-md-6 my-4 ">    
  <div className="card">
  <img src={movie.poster_path ? posterURL : ranImg} className="card-img-top" alt={movie.original_title}/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <p className="card-text">{movie.overview}</p>
    < Link to={detailsURL} className="btn btn-primary">Show details</Link>
  </div>
</div>
</div>
    )
}

export default MovieCard;