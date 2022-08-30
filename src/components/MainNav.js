import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from "@material-ui/icons/Whatshot";

import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({

    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#13110E",
      zIndex: 100,
    },
  });
export default function SimpleBottomNavigation() {
  const classes = useStyles();
 
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    {/*if (value === 0) {
      navigate("/movies");
    } else if (value === 1) {
      navigate("/series");
    } else if (value === 2) {
      navigate("/search");
    }
  }, [value, navigate]);*/}
    if (value === 0) {
      navigate("/search");
    }
  }, [value, navigate]);
  return (
  
      <BottomNavigation
        
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        style ={{backgroundColor: "black" }} 
      >
       
       {/* <BottomNavigationAction 
         style ={{color: "black" }} 
        label="Movies" 
        icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
         style ={{color: "black" }} 
        label="Series" 
        icon={<TVIcon />} 
       />*/}
       
      </BottomNavigation>
    
  );
}