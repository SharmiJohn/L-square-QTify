import React from 'react';
import {StyledEngineProvider} from '@mui/material/styles';
import Navbar from "./component/Navbar/Navbar"
import Hero from "./component/Hero/Hero"







function App() {
  return (
    <div>
      {/* StyledEngineProvider give more priority for material ui css then add the custom css */}
       <StyledEngineProvider injectFirst> <Navbar/>
       <Hero/>
       </StyledEngineProvider>

     {/* <Navbar/> */}
     {/* <p>hello world</p> */}
    </div>
  );
}

export default App;
