import { Box, Typography } from "@mui/material";
import React from "react";
import iconDone from "../icons/icon-thank-you.svg";
function Done() {
  const prpretyIcons = {
    height: "70px",
    width: "70px",
    borderRadius: "50%",
  };
  return (
    <Box
      sx={{
        height: { sm: "52vh", xs: "60vh" },
        width: { md: "53vh", xs: "40vh", sm: "50vh" },
        backgroundColor: "white",
        borderRadius: "15px",
        alignItems: "center",
        color: "hsl(213, 96%, 18%)",
        position: { xs: "relative" },
        top: { xs: "-90px", sm: "0" },
        marginRight: "0px",
        fontFamily: "Ubuntu",
        display:'flex',
      }}
    >
      <Box sx={{width:'100%'}}>
        <img style={prpretyIcons} src={`${iconDone}`} alt="My Icon" />
        <Typography variant="h4" gutterBottom sx={{fontFamily:'k',marginTop:'15px',marginBottom:'00'}}>
       Thank you
      </Typography>
      <p className="muted" style={{margin:'1px',padding:{xs:'30px',sm:'0',md:'0'}}}>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      </Box>
    </Box>
  );
}

export default Done;
