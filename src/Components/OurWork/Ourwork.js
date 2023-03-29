import React from "react";
import Card from "../Card/Card";
import { useEffect } from "react";
import Image from "../../assets/Rectangle-55.png";
import Image1 from "../../assets/Rectangle-56.png";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  headerOurwork: {
    backgroundColor: "#301e4e",
    width: "100%",
    height: "auto",
  },

  mainHeading: {
    marginLeft: "3%",
    width: "25%",
    height: "25vh",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "689",
    fontSize: "99px",
    lineHeight: "132px",
    letterSpacing: "-0.015em",
    color: "#e2daeb",
  },
  ourworkCards: {
    display: "flex",
    flexWrap: "wrap",
    height: "auto",
    marginLeft: "3%",
  },
  ourworkButton: {
    backgroundColor: "#ff6e6c",
    color: "white",
    borderRadius: "8px",
    height: "41px",
    width: "90%",
    marginLeft: "5%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    marginBottom: "15px",
    border: "2px solid #ff6e6c",
  },
  [theme.breakpoints.down("1300")]: {
    mainHeading: {
      width: "20%",
      height: "20vh",
      fontWeight: "700",
      fontSize: "62px",
      lineHeight: "83px",
      letterSpacing: "-0.005em",
    },
  },
  [theme.breakpoints.down("1100")]: {
    mainHeading: {
      height: "10%",
    },
  },
  [theme.breakpoints.down("700")]: {
    ourworkCards: {
      marginLeft: "0%",
    },
  },
  [theme.breakpoints.down("400")]: {
    ourworkCards: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "0%",
    },
    mainHeading: {
      width: "100px",
      height: "100px",
      fontWeight: "700",
      fontSize: "40px",
      lineHeight: "53px",
    },
  },
}));
const Ourwork = () => {
  const classes = useStyles();
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <>
      <Box className={classes.headerOurwork}>
        <p className={classes.mainHeading}>OUR WORK</p>

        {width > 450 ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6E6C",
              marginLeft: "3.5%",
              marginBottom: "30px",
              width: "20%",
              height: "5%",
            }}
          >
            View ALL
          </Button>
        ) : null}
        <Box className={classes.ourworkCards}>
          <Card
            name="STARBUCKS"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image}
          />
          <Card
            name="NIKE"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image1}
          />
          <Card
            name="NIKE"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image1}
          />
          <Card
            name="STARBUCKS"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image}
          />
          {width <= 450 ? (
            <button className={classes.ourworkButton}>View all</button>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default Ourwork;
