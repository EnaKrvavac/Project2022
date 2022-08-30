import {
    Button,
    createTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  import { useEffect, useState } from "react";
  import SearchIcon from "@material-ui/icons/Search";
  import SingleContent from "../../components/SingleContent/SingleContent";
  import './Search.css';
  import Movies from '../Movies/Movies';
  import Series from "../Series/Series";
  import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
  
const Search = () => {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    
    const darkTheme = createTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#fff",
          },
        },
      });

      const fetchSearch = async(e) => {
       // e.preventDefault();
        setIsLoading(true);
        console.log("Searching");
        try{
          const url=`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${searchText}`;
          const res= await fetch(url);
          const data= await res.json();
          console.log(data);
          setContent(data.results);
          setIsLoading(false);
        }
        catch(e){
          console.log(e);
          setIsLoading(false);
        }
      }

      useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
      }, [type, page]);
    


    return(

        <div>
       <ThemeProvider theme={darkTheme}>
        
        <div className="search" >
         
        <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
        
        <Button
        onClick={fetchSearch}
        variant="contained"
        style={{ marginLeft: 10 }}
      
        >
        
         {/*<LoadingSpinner />*/}
        {/* {searchText.length > 0 ?*/}
          {isLoading ?
          <LoadingSpinner />
          :
          <SearchIcon fontSize="large"  />
         
          }
          </Button>
        
        </div>
       
        <Tabs 
 
          value={type}
          indicatorColor="primary"
          textColor="primary"
          style={{ paddingBottom: 5 }}
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
            
          }}
          aria-label="disabled tabs example">
          <Tab style={{ width: "50%" }} label="Movies" />
          <Tab style={{ width: "50%" }} label="TV Series" />
          
        </Tabs>
      
        </ThemeProvider>
        
        <div className="movies">
        {searchText.length > 2 &&
        content && 
          
          content.map((c) => (
           
            <SingleContent 
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              media_type={type ? "tv" : "movie"}
            />
           
          ))}
           </div>
      
          
          {searchText.length === 0 && 
           
           (type ? <Series /> : <Movies />)
        
          }
          {searchText.length > 2 && 
            !content &&

            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        
      
      </div>
     




    );

};

export default Search;