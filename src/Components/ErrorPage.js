import {Link} from 'react-router-dom';

let ErrorPage = () => {
    return (
        <div className='container my-2'>
          <h2>Error 404</h2>
          <p>Page not found</p>
          <Link to='/'>Back to homepage</Link>
        </div>
    )
}

export default ErrorPage;