// import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import PlanOptions from "./PlanOptions";

import {SelectPlanContext} from "./hook/SelectPlanOption";
import { useContext, useEffect, useState } from "react";
function PickAdd() {

 






  useEffect(() => {
    console.log("im effect for picked");
  }, []);

  const {
    plansOption,
    setPlansOption,
    changePlan,
    changePlanType,
    changePlanisOnlineService,
    changePlanisLargerStorage,
    changePlanisCustomizableProfile,
  } = useContext(SelectPlanContext);

  const access = {
    backgroundColor: "hsl(243, 100%, 62% , 0.05)",
    borderColor: " hsl(243, 100%, 62%)",
  };
  const prpretyCards = {
    height: "60px",
    width: { sm: "400px", xs: "300px" },
    border: "1px solid hsl(229, 24%, 87%)",
    borderRadius: "10px",
    marginTop: { sm: "0px", xs: "10px" },
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    padding: { sm: "19px 0 0 15px", xs: "17px 17px 8px" },
    fontFamily: "Ubuntu",
    cursor: "pointer",
    ":hover": access,
  };

  const select = {
    height: "60px",
    width: { sm: "400px", xs: "300px" },
    border: "1px solid hsl(229, 24%, 87%)",
    borderRadius: "10px",
    marginTop: { sm: "0px", xs: "10px" },
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    padding: { sm: "19px 0 0 15px", xs: "17px 17px 8px" },
    fontFamily: "Ubuntu",
    cursor: "pointer",
    backgroundColor: "hsl(243, 100%, 62% , 0.05)",
    borderColor: " hsl(243, 100%, 62%)",
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
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: "left", padding: "40px 20px  0 ", fontFamily: "k" }}
      >
        Pick add-ons{" "}
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
        Add-ons help enhance your gaming experiencd.
      </Typography>

      <Box
        sx={{
          height: "30vh",
          width: { sm: "440px", xs: "240px" },
          backgroundColor: "white",
          marginTop: "30px",
          padding: { sm: "0px 20px  0 ", xs: "0px 80px  0  20px" },
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: { xs: "", md: "" },
        }}
      >
        <Box
          sx={plansOption.isOnlineService ? select : prpretyCards}
          onClick={() => {
            changePlanisOnlineService();
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              margin: { xs: "0 0 0 -5px", sm: "0 0 0 0px" },
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box sx={{}}>
              <Checkbox
                checked={plansOption.isOnlineService}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>{" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "185px",
                marginTop: "-37px",
                marginLeft: "15px",
              }}
            >
              <label style={{ textAlign: "left", marginTop: "40px" }}>
                Online service
              </label>{" "}
              <label
                style={{ textAlign: "left", fontFamily: "k", opacity: "0.5" }}
              >
                {" "}
                Access to multiplayer games{" "}
              </label>
            </Box>
          </Box>
          <Box sx={{ margin: "10px 20px" }}>
            {" "}
            <label
              style={{
                textAlign: "left",
                marginTop: "0px",
                color: "hsl(243, 1070%, 62%)",
              }}
            >
              {!plansOption.planType
                ? PlanOptions.onlineServices.monthly
                : PlanOptions.onlineServices.yearly}{" "}
            </label>{" "}
          </Box>{" "}
        </Box>
        <Box
          sx={plansOption.isLargerStorage ? select : prpretyCards}
          onClick={() => {
            changePlanisLargerStorage();
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              margin: { xs: "0 0 0 -5px", sm: "0 0 0 0px" },
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box sx={{}}>
              <Checkbox
                checked={plansOption.isLargerStorage}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>{" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "185px",
                marginTop: "-37px",
                marginLeft: "15px",
              }}
            >
              <label style={{ textAlign: "left", marginTop: "40px" }}>
                Larger storage
              </label>{" "}
              <label
                style={{ textAlign: "left", fontFamily: "k", opacity: "0.5" }}
              >
                {" "}
                Extra 1TB of cloud save{" "}
              </label>
            </Box>
          </Box>
          <Box sx={{ margin: "10px 20px" }}>
            {" "}
            <label
              style={{
                textAlign: "left",
                marginTop: "0px",
                color: "hsl(243, 1070%, 62%)",
              }}
            >
              {!plansOption.planType
                ? PlanOptions.largerStorage.monthly
                : PlanOptions.largerStorage.yearly}{" "}
            </label>{" "}
          </Box>{" "}
        </Box>
        <Box
          sx={plansOption.isCustomizableProfile ? select : prpretyCards}
          onClick={() => {
            changePlanisCustomizableProfile();
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              margin: { xs: "0 0 0 -5px", sm: "0 0 0 0px" },
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box sx={{}}>
              <Checkbox
                checked={plansOption.isCustomizableProfile}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>{" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "185px",
                marginTop: "-37px",
                marginLeft: "15px",
              }}
            >
              <label style={{ textAlign: "left", marginTop: "40px" }}>
                Customizable Profile
              </label>{" "}
              <label
                style={{ textAlign: "left", fontFamily: "k", opacity: "0.5" }}
              >
                {" "}
                Access to multiplayer games{" "}
              </label>
            </Box>
          </Box>
          <Box sx={{ margin: "10px 20px" }}>
            {" "}
            <label
              style={{
                textAlign: "left",
                marginTop: "0px",
                color: "hsl(243, 1070%, 62%)",
              }}
            >
              {!plansOption.planType
                ? PlanOptions.customizableProfile.monthly
                : PlanOptions.customizableProfile.yearly}{" "}
            </label>{" "}
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default PickAdd;
