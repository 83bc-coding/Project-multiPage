import { React, useEffect, useContext, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import myIconSvg from "../icons/icon-arcade.svg";
import iconAdanced from "../icons/icon-advanced.svg";
import iconPro from "../icons/icon-pro.svg";
import PlanOptions from "./PlanOptions";
import {SelectPlanContext} from "./hook/SelectPlanOption";
function Plans() {
  const {
    plansOption,
    changePlan,
    changePlanType,
  
  } = useContext(SelectPlanContext);

  // const [PlanOptions, setPlanOptions] = useState(PlanOptions());
 
  useEffect(() => {
    console.log("im effect for plan");
  }, []);

  const access = {
    backgroundColor: "hsl(243, 100%, 62% , 0.05)",
    borderColor: " hsl(243, 100%, 62%)",
  };
  const prpretyCards = {
    height: {
      sm: plansOption.planType ? "150px" : "135px",
      xs: plansOption.planType ? "80px" : "60px",
    },
    width: { sm: "105px", xs: "250px" },
    border: "1px solid hsl(229, 24%, 87%)",
    borderRadius: "10px",
    marginTop: { sm: "0px", xs: "10px" },
    display: "flex",
    flexDirection: { sm: "column", xs: "row" },
    alignItems: "start",
    justifyContent: { sm: "space-between", xs: "start" },
    padding: { sm: "19px 0 0 10px", xs: "17px 17px 8px" },
    fontFamily: "Ubuntu",
    cursor: "pointer",
    ":hover": access,
  };

  const select = {
    height: {
      sm: plansOption.planType ? "150px" : "135px",
      xs: plansOption.planType ? "80px" : "60px",
    },
    width: { sm: "105px", xs: "250px" },
    border: "1px solid hsl(229, 24%, 87%)",
    borderRadius: "10px",
    marginTop: { sm: "0px", xs: "10px" },
    display: "flex",
    flexDirection: { sm: "column", xs: "row" },
    alignItems: "start",
    justifyContent: { sm: "space-between", xs: "start" },
    padding: { sm: "19px 0 0 10px", xs: "17px 17px 8px" },
    fontFamily: "Ubuntu",
    cursor: "pointer",
    backgroundColor: "hsl(243, 100%, 62% , 0.05)",
    borderColor: " hsl(243, 100%, 62%)",
  };

  const prpretyIcons = {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  };
  function setPlans(S) {
    changePlan(S);
  }
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
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: "left", padding: "40px 20px  0 ", fontFamily: "k" }}
      >
        Select your plan{" "}
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
        You have the option of monthly or yearly billing.{" "}
      </Typography>

      <Box
        sx={{
          height: "18vh",
          width: { sm: "400px", xs: "262px" },
          backgroundColor: "white",
          marginTop: "30px",
          padding: { sm: "0px 20px  0 ", xs: "0px 80px  0  20px" },
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "", md: "" },
        }}
      >
        <Box
          sx={plansOption.plan === "Arcade" ? select : prpretyCards}
          onClick={(e) => {
            setPlans("Arcade");
          }}
        >
          <img style={prpretyIcons} src={`${myIconSvg}`} alt="My Icon" />
          <Box
            sx={{
              textAlign: "left",
              margin: { xs: "0 0 0 20px", sm: "0 0 0 0px" },
            }}
          >
            {" "}
            <label style={{ textAlign: "left", marginTop: "40px" }}>
              Arcade
            </label>
            <Box>
              {" "}
              <label
                style={{ textAlign: "left", fontFamily: "k", opacity: "0.5" }}
              >
                {!plansOption.planType
                  ? PlanOptions.Arcade.monthly
                  : PlanOptions.Arcade.yearly}
              </label>
              <Box>
                {" "}
                <label style={{ textAlign: "left", marginTop: "0px" }}>
                  {plansOption.planType ? " 2 month free" : ""}
                </label>{" "}
              </Box>{" "}
            </Box>
          </Box>
        </Box>
        <Box
          sx={plansOption.plan  === "Advanced" ? select : prpretyCards}
          onClick={(e) => {
            setPlans("Advanced");
          }}
        >
          <img style={prpretyIcons} src={`${iconAdanced}`} alt="My Icon" />
          <Box
            sx={{
              textAlign: "left",
              margin: { xs: "0 0 0 20px", sm: "0 0 0 0px" },
            }}
          >
            {" "}
            <label style={{ textAlign: "left", marginTop: "40px" }}>
              Adanced
            </label>
            <Box>
              {" "}
              <label
                style={{ textAlign: "left", fontFamily: "k", opacity: "0.5" }}
              >
                {!plansOption.planType
                  ? PlanOptions.Advanced.monthly
                  : PlanOptions.Advanced.yearly}
              </label>
              <Box>
                {" "}
                <label style={{ textAlign: "left", marginTop: "0px" }}>
                  {plansOption.planType ? " 2 month free" : ""}
                </label>{" "}
              </Box>{" "}
            </Box>
          </Box>
        </Box>
        <Box
          sx={plansOption.plan  === "Pro" ? select : prpretyCards}
          onClick={(e) => {
            setPlans("Pro");
          }}
        >
          <img style={prpretyIcons} src={`${iconPro}`} alt="My Icon" />
          <Box
            sx={{
              textAlign: "left",
              margin: { xs: "0 0 0 20px", sm: "0 0 0 0px" },
            }}
          >
            {" "}
            <label style={{ textAlign: "left", marginTop: "40px" }}>Pro</label>
            <Box>
              {" "}
              <label
                style={{ textAlign: "left", fontFamily: "k", opacity: "0.5" }}
              >
                {!plansOption.planType
                  ? PlanOptions.Pro.monthly
                  : PlanOptions.Pro.yearly}
              </label>
              <Box>
                {" "}
                <label style={{ textAlign: "left", marginTop: "0px" }}>
                  {plansOption.planType ? " 2 month free" : ""}
                </label>{" "}
              </Box>{" "}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          height: "40px",
          width: { xs: "290px", sm: "440px" },
          backgroundColor: "hsl(231, 100%, 99%)",
          margin: "40px 20px 0 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          position: { xs: "relative", sm: "", md: "" },
          top: { xs: "130px", sm: "0px" },
        }}
      >
        <label style={{ margin: "20px 20px" }}>Monthly</label>
        <label class="switch">
          <input
            type="checkbox"
            onChange={() => {
              changePlanType();
            }}
          />
          <span class="slider"></span>
        </label>
        <label style={{ margin: "20px 20px", fontFamily: "k", opacity: "0.5" }}>
          Yearly
        </label>
      </Box>
    </Box>
  );
}
export default Plans;
