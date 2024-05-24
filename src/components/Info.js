import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
function Info() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const inputProprty = {
    height: "15px",
    margin: "7px 3px",
    borderRadius: "5px",
  };
  const lableProprty = { textAlign: "left" };
  return (
    <Box
    sx={{
      height: "50vh",
      width: { md: "53vh", xs: "40vh", sm: "50vh" },
      backgroundColor: "white",
      borderRadius: "15px",
      alignItems: "center",
      color:'hsl(213, 96%, 18%)', position:{xs:'relative'},top:{xs:'-30px', sm:'0'}
     
     
    }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: "left", padding: "40px 20px  0 ", fontFamily: "k" }}
      >
        Personal info
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "k",
          opacity: "0.5",
          textAlign: "left",
          padding: { sm: "0px 20px  0 ", xs: "0px 80px  0  20px" },
        }}
      >
        Please provide your name, email address, and phone number.
      </Typography>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 50px 0 21px",
          fontFamily: "k",
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label style={lableProprty}>Name</label>
        <input
          style={inputProprty}
          id="name"
          name="name"
          type="text"
          value={name}
          autoFocus
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label style={lableProprty}>Email Address</label>
        <input
          style={inputProprty}
          id="name"
          name="name"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          required
        />

        <label style={lableProprty}>Phone Number </label>
        <input
          style={inputProprty}
          id="name"
          name="name"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          autoFocus
          required
        />
      </form>
    </Box>
  );
}

export default Info;
