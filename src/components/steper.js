import {React, useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
 import "./sidBar.css";


 function Steper({ index, step,ico,conf }) { 

 useEffect(()=>{
  console.log('im effect step')

 },[])

 if(conf){
  index=4;
 }
 
    const iscon = ico+1 === index ;
 



   

   console.log('iooo co', index,ico)
    return (
    <Box
      sx={{
        margin: { xs: "9px 0px 0px 20px", sm: "20px 0px 0px 0px" },
        width: { xs: 40, sm: 150 },
        height: 46,
        position: { xs: "relative" },
        left: { xs: "25%", sm: 60 },
        borderRadius: 1,
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        alignItems: "start",
        flexDirection: "row-revres",
      }}
    >
      <Box className={iscon   ? "circular-element-true" : "circular-element"} sx={{}}>
        <span className={iscon ? "number-true" : "number"}>{index}</span>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block", sm: "block", fontFamily: "k" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "0px 0 0 10px",
            color: "white",
          }}
        >
          <Typography
            variant="caption"
            sx={{ textAlign: "left", fontSize: "9px", opacity: "0.6" }}
          >
            step {index}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: " bold", maxWidth: "69px" }}
            gutterBottom
          >
            {step}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Steper;
