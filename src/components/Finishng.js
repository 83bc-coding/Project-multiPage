// import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import  PlanOptions  from "./PlanOptions";
import {SelectPlanContext} from "./hook/SelectPlanOption";
import { useContext, useEffect } from "react";
function Finishng() {

  const {
    plansOption,
    setPlansOption,
    changePlan,
    changePlanType,
    plan,
    changePlanisOnlineService,
    changePlanisLargerStorage,
    changePlanisCustomizableProfile,
  } = useContext(SelectPlanContext);

  useEffect(() => {
    console.log("im effect finsh",);
  }, []);


let planName = plan()

  const Type = !plansOption.planType
    ? PlanOptions[plansOption.plan].monthly
    : PlanOptions[plansOption.plan].yearly;

  const addOnTotal = [
    plansOption.isCustomizableProfile,
    plansOption.isLargerStorage,
    plansOption.isOnlineService,
  ].reduce((acc, addOn, index) => {
    if (!addOn) return acc;
    const name = ["customizableProfile", "largerStorage", "onlineServices"][
      index
    ];
    const planName = !plansOption.planType ? "monthly" : "yearly";
    const numToAdd = PlanOptions[name][planName];
    const price = Number(numToAdd.replace(/[^0-9.-]+/g, ""));
    return acc + price;
  }, 0);

  console.log(addOnTotal, "total picked");

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
        Finishng up{" "}
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
        Double-chech everything looks OK before confirming{" "}
      </Typography>

      <Box
        sx={{
          height: "210px",
          backgroundColor: "hsl(243, 100%, 62%,0.05)",
          pad: 2,
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            height: "60px",
            backgroundColor: " ",
            padding: "7px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                textAlign: "left",
                padding: "10px 0 0 10px",
                fontFamily: "Ubuntu",
              }}
            >
             {planName} ({plansOption.planType ? "Yearly" : "Monthly"}) <br />
              <span
                style={{
                  textDecorationLine: "underline",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={() => {
                  changePlanType();
                }}
              >
                Change
              </span>
            </Typography>
          </Box>
          <Box sx={{ margin: "17px 13px", fontFamily: "k" }}>{Type}</Box>
        </Box>

        <Box
          sx={{
            height: "1px",
            backgroundColor: "black",
            width: "90%",
            margin: " auto",
            opacity: "0.09",
          }}
        ></Box>

        <Box
          sx={{
            height: "40px",
            backgroundColor: " ",
            padding: "0px 7px",
            justifyContent: "space-between",
            fontSize: "13px",
            display: plansOption.isOnlineService ? "flex" : "none",
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                textAlign: "left",
                padding: "10px 0 0 10px",
                fontFamily: "Ubuntu",
              }}
            >
              Online service <br />
            </Typography>
          </Box>
          <Box sx={{ margin: "17px 13px", fontFamily: "k" }}>
            {!plansOption.planType
              ? PlanOptions.onlineServices.monthly
              : PlanOptions.onlineServices.yearly}
          </Box>
        </Box>

        <Box
          sx={{
            height: "40px",
            backgroundColor: " ",
            padding: "0px 7px",
            display: plansOption.isLargerStorage ? "flex" : "none",
            justifyContent: "space-between",
            fontSize: "13px",
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                textAlign: "left",
                padding: "10px 0 0 10px",
                fontFamily: "Ubuntu",
              }}
            >
              largerStorage <br />
            </Typography>
          </Box>
          <Box sx={{ margin: "17px 13px", fontFamily: "k" }}>
            {!plansOption.planType
              ? PlanOptions.largerStorage.monthly
              : PlanOptions.largerStorage.yearly}
          </Box>
        </Box>

        <Box
          sx={{
            height: "60px",
            backgroundColor: " ",
            padding: "0px 7px",
            display: plansOption.isCustomizableProfile ? "flex" : "none",
            justifyContent: "space-between",
            fontSize: "13px",
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                textAlign: "left",
                padding: "10px 0 0 10px",
                fontFamily: "Ubuntu",
              }}
            >
              Customizable <br />
            </Typography>
          </Box>
          <Box sx={{ margin: "17px 13px", fontFamily: "k" }}>
            {!plansOption.planType
              ? PlanOptions.customizableProfile.monthly
              : PlanOptions.customizableProfile.yearly}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "40px",
          backgroundColor: " ",
          padding: "0px 7px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "13px",
          width: "450px",
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              textAlign: "left",
              padding: "10px 0 0 32px",
              fontFamily: "Ubuntu",
              opacity: "0.5",
            }}
          >
            Total (per <span> {!plansOption.planType ? "month" : "year"} </span>
            ) <br />
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "17px 13px",
            fontFamily: "k",
            fontSize: "19px",
            fontWeight: "600",
            color: "hsl(243, 100%, 62%)",
          }}
        >
          +${addOnTotal + Number(Type.replace(/[^0-9.-]+/g, ""))}/{!plansOption.planType? 'mo':'yr'}
        </Box>
      </Box>
    </Box>
  );
}

export default Finishng;
