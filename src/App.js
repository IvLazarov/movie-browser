
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Switch, Route} from 'react-router-dom';
import SearchView from './Components/SearchView';
import MovieView from './Components/MovieView';
import ErrorPage from './Components/ErrorPage';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';




function App() {

let [searchResults, setSearchResults] = useState([])
let [searchText, setSearchText] = useState('')
let history=useHistory()

let handleInputChange= (e) => {
  history.push('/search')  
    setSearchText(e.target.value)
    
  }

let handleSubmit = (e) => {
  e.preventDefault()
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=8d74865deeb85e7f0c75f7a3558e7387&language=en-US&query=${searchText}&page=1&include_adult=false`)
  .then(response => response.json())
  .then(data => {
    setSearchResults(data?.results)
  })
}

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} handleSubmit={handleSubmit} handleInputChange={handleInputChange}/> 
       <Switch>
       <Route path="/" exact>
       <Home/>
       </Route>
       <Route path='/search'>
       <SearchView keyword={searchText} searchResults={searchResults}/>
       </Route>
       <Route path='/movies/:id' component={MovieView} />
      <Route path='*' component={ErrorPage} />
       </Switch>
    </div>
  );
}

export default App;
