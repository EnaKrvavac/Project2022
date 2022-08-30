import React, {useState, useEffect} from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Movies.css';
//const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=7210724396da9dea30e2231e2b0b6e74&page=${page}";
//const API_POPULAR ="https://api.themoviedb.org/3/movie/popular?api_key=7210724396da9dea30e2231e2b0b6e74"

//const trending_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=7210724396da9dea30e2231e2b0b6e74";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const firstURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=7210724396da9dea30e2231e2b0b6e74";
    


   const firstCall = async () => {
    const res= await fetch(firstURL)
    const data= await res.json();
    setMovies([...movies, ...data.results]);
   }

   const secondURL="https://api.themoviedb.org/3/movie/popular?api_key=7210724396da9dea30e2231e2b0b6e74";
   
   const secondCall = async () => {
    const res= await fetch(secondURL)
    const data= await res.json();
    setMovies(movies => movies.concat(data.results.slice(0,10)));
   }

   useEffect(() => {
    window.scroll(0, 0);
    firstCall();
    secondCall();
   
    // eslint-disable-next-line
  }, []);
    


    return(
        <div>
            <span className="pageTitle"></span>
            <div className="movies">
                {
                    movies && movies.map((c) =>(
                        <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name}  
                        media_type="movie"
                         />
                    ))
                }
            </div>
      
        </div>




    );

};

export default Movies;