import { Link} from 'react-router-dom';

const Navbar =({searchText, handleSubmit, handleInputChange}) => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Movie Browser</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">          
        </ul>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" 
          aria-label="Search" 
          value={searchText}
          onChange={handleInputChange}
          />
          <button className="btn btn-outline-success" type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
        </form>
      </div>
    </div>
  </nav>
    )
  }

export default Navbar;





