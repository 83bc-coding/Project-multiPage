import "./App.css";
import { React, useEffect, } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PickAdd from "./components/PickAdd";
import SelectPlanProvider from "./components/hook/SelectPlanOption";
import Plans from "./components/Plans";
import Stack from "@mui/material/Stack";
import SidBar from "./components/sidBar";
import Info from "./components/Info";
import "./index.css";
import { Box } from "@mui/material";
import MultiStepControll from "./components/MultiStepControll";
 import Finishng from "./components/Finishng";
import Done from "./components/DonePage";
function App() {
 
 
 
  const { stepIndex, goAfter, goBack, fristStep, lastStep, conf } =
    MultiStepControll();

  useEffect(()=>{
  console.log('im effect app')
},[])

  const them = createTheme({
    Typography: {
      fontFamily: ["k"],
    },
  });

  const Btns = ({ type, onClick, sstyle = "default", text }) => {
    return (
      <button type={type} onClick={onClick} className={`btn ${sstyle}`}>
        {text}
      </button>
    );
  };

  return (
    <div className="App">
      <ThemeProvider theme={them}>
        <SelectPlanProvider> 
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
          sx={{
            bgcolor: "white",
            height: { xs: "90vh", sm: "70vh" },
            position: "relative",
            top: { xs: "20%" },
            left: { xs: "0%", md: "7%", sm: "6%", lg: "20%" },
            width: { sm: "90vh", xs: "80vh", md: "100vh" },

            padding: { md: "20px 0", xs: "0", sm: 2 },
            borderRadius: "15px",
            margin: "1px",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "start" },
            justifyContent: "space-around",
          }}
        >
          <SidBar step={stepIndex} iscong={conf}> </SidBar>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-around",
            }}
          >
            {stepIndex === 0 && <Info />}
            {stepIndex === 1 && (
              <Plans  />
            )}
            {stepIndex === 2 && <PickAdd />}
            {stepIndex === 3 && <Finishng />}
            {stepIndex === 4 && <Done/>}


            <Box
              sx={{
                height: { xs: "100px", sm: "0" },
                width: { xs: "100%", sm: "100%" },
                backgroundColor: { xs: "White", sm: "", md: "" },
                position: { xs: "relative", sm: "" },
                borderRadius: { xs: "10px", sm: "0" },
              }}
            >
              {" "}
              <div className="steps" style={{display:conf?'none':'flex'}}>
                <Btns
                  sstyle="back"
                  text={!fristStep ? "Go back" : ""}
                  type="button"
                  onClick={goBack}
                  s
                />

                <Btns
                  text={lastStep ? "Confirm" : "Next Step"}
                  onClick={goAfter}
                  sstyle={lastStep ? "submit" : "default"}
                />
              </div>{" "}
            </Box>
          </Box>
        </Stack>{" "}
        </SelectPlanProvider>

      </ThemeProvider>
    </div>
  );
}

export default App;
