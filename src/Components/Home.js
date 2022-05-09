import Hero from './Hero';




const Home = () => {
    return(
      <>
       <Hero text='Welcome to My Movie Browser'/>
       <div className='container'>
         <div className='row'>
           <div className='col-lg-8 offset-lg-2 my-5'>
          <p className='lead d-flex justify-content-center'>
           Enter a movie title into the search bar and start searching 
           </p>
           </div>
         </div>
       </div>
      </>
    )
  }

  export default Home;

