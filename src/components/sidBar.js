import React, { useEffect } from "react";
import {   ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box"
import Steper from './steper'
import './sidBar.css'
 


const sideBar = ['Your Info', 'Shos Plan','Add-Ons', 'Summary'];

  function SidBar({step,iscong}) {

useEffect(()=>{
  console.log('im effect sidbar')
},[])
console.log(iscong)
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
    >
      <Box
      className={"ff"}
        direction={{ xs: "row", sm: "column" }}
        
        sx={{
 

          width: { sm: "250px", md: "250px", xs: "100%" },
          height: { xs: "390px",  sm:'99.9%' },
          borderRadius: '15px',
          margin: "0px",
   flexDirection:{xs:'row',md:'column',sm:'column'},
  
        
           
        }}
      >

{ 

sideBar.map((item, index)=>{

  return (

    <Steper key={index} conf={iscong} step={item} index={index+1} ico={step} />
  )
}
)

}





      </Box>
    </ThemeProvider>
  );
}

export default SidBar;
