import React, { useEffect, useState } from 'react';
import {StyledEngineProvider} from '@mui/material/styles';
import Navbar from "./component/Navbar/Navbar"
// import { Outlet } from 'react-router-dom';
import { fetchTopAlbums ,fetchNewAlbums,fetchSongs} from './component/Api/Api';
import HomePage from './component/Pages/HomePage';
// import Hero from "./component/Hero/Hero"



function App() {
  const [data,setdata]=useState({});
// const generatedata=(topAlbums,fetchTopAlbums)
const generatedata=(key,fun)=>{
  fun().then((Data)=>{//in Data has the output of function
    setdata((prevstate)=>{
      return {...prevstate,[key]:Data}//{{key1:value1},{key2,value2}}
    })
  }
  )}


// Again destructurind the Data in the setdata
//in data have object so we are assigning to array --array of object
const {topAlbums=[],newAlbums=[],songs=[]}=data

//has array of obj [{},{}]


useEffect(()=>{
  generatedata("topAlbums",fetchTopAlbums);
  generatedata("newAlbums",fetchNewAlbums);
  generatedata("songs",fetchSongs);


},[]);
  return (
    <div>
      {/* StyledEngineProvider give more priority for material ui css then add the custom css */}
       <StyledEngineProvider injectFirst> 
       <Navbar/>
       <HomePage data={{topAlbums,newAlbums,songs}}/>
      


       {/* we are getting all data from the major component that is app so that we can find the error */}
       {/*outlet context is like usecontext hook -(aviod use prop drilling) outlet pass the data to the route(child) */}
       {/* Inside the ParentComponent, you can use the <Outlet> component to render the components associated with child routes. */}
       {/* for this home page is the child component so we use outlet in homepage  */}
       {/* //<Outlet context={{data:{topAlbums,newAlbums,songs}}}/> */}
     
       {/* {[{}],[{}]} */}
       </StyledEngineProvider>

    
    </div>
  );
}

export default App;
