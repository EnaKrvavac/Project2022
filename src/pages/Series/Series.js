import { SensorOccupiedSharp } from '@mui/icons-material';
import React, {useState, useEffect} from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';


//const API_URL="https://api.themoviedb.org/3/tv/top_rated?api_key=7210724396da9dea30e2231e2b0b6e74";

const Series = () => {
    const [series, setSeries] = useState([]);

    const firstURL = "https://api.themoviedb.org/3/tv/top_rated?api_key=7210724396da9dea30e2231e2b0b6e74";
    


    const firstCallSeries = async () => {
     const res= await fetch(firstURL)
     const data= await res.json();
     setSeries([...series, ...data.results]);
    }
 
    const secondURL="https://api.themoviedb.org/3/tv/popular?api_key=7210724396da9dea30e2231e2b0b6e74";
    
    const secondCallSeries = async () => {
     const res= await fetch(secondURL)
     const data= await res.json();
     setSeries(series => series.concat(data.results.slice(0,10)));
    }
 
    useEffect(() => {
     window.scroll(0, 0);
     firstCallSeries();
     secondCallSeries();
    
     // eslint-disable-next-line
   }, []);

    return(
        <div>
            <span className="pageTitle"></span>
            <div className="movies">
                {
                    series && series.map((c) =>(
                        <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name}  
                        media_type="tv"
                         />
                    ))
                }
            </div>
        </div>



    );

};

export default Series;