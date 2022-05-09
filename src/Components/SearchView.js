import Hero from './Hero';
import MovieCard from './MovieCard';


const SearchView= ({keyword,searchResults}) => {
    let title=`You are looking for ${keyword}`;
    let resultsHTML=searchResults?.map((obj) => {        
        return <MovieCard movie={obj} key={obj.id}/>
    })
    return(
        <>
        <Hero text={title}/>
        { resultsHTML &&
        <div className='container'>
        <div className='row'>
        {resultsHTML}
        </div>
        </div>

        }
        
        
        </>
    )
}

export default SearchView;