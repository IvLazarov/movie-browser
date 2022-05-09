import Hero from './Hero';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';



const MovieView = () => {
    let {id} = useParams()
    let [movieDetails, setMovieDetails] = useState({})
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
    .then(response => response.json())
    .then(data => {
        setMovieDetails(data)
        setIsLoading(false)
        
    })
    },[id])

    function renderMovieDetails() {
        if(isLoading){
            return < Hero text='Loading...'/>
        }
        if(movieDetails){
            
            const posterPath=`http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;                           
            const backdropURL=`http://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
            
            return (
            <>
            < Hero text={movieDetails.original_title} backdrop={backdropURL} />
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-3'>
                    <img src={posterPath} alt ='...' className='rounded shadow img-fluid' />
                    </div>
                    <div className='col-md-9'>
                        <h2>{movieDetails.original_title}</h2>
                        <p className='lead'>{movieDetails.overview}</p> 
                    </div>
                </div>
            </div>
            </>
            )
        }
    }
    
    


    
    

    return renderMovieDetails();
}

export default MovieView;