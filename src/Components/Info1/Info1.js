import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
// import "./Info1.css";
import Ellipse from "../../assets/Ellipse-24.png";

const useStyles = makeStyles((theme) => ({
  headerInfo1: {
    marginTop: "100px",
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  imageContainer: {
    width: "50%",
  },

  textOverlay: {
    position: "absolute",
    top: "5%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  infoHeading1: {
    width: "40%",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "99px",
    letterSpacing: "-0.015em",
    color: "#301e4e",
  },
  paraOverlay: {
    marginTop: "-5%",
    width: "50%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "35px",
    /* line-height: 44px, */
    letterSpacing: "0.0025em",
    color: "#0c0525",
  },
  containerImg: {
    width: "90%",
  },
  paraContainer: {
    width: "42%",
  },
  infoText: {
    width: "100%",
    height: "9%",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "62px",
    lineHeight: "83px",
    letterSpacing: "-0.005em",
    color: "#301e4e",
  },
  [theme.breakpoints.down("1130")]: {
    infoText: {
      width: "100%",
      height: "10%",
      fontWeight: "400",
      fontSize: "35px",
      lineHeight: "7vh",
      letterSpacing: "0.0025em",
    },
    infoHeading1: {
      fontSize: "62px",
      lineHeight: "83px",
      letterSpacing: "-0.005em",
    },
    containerImg: {
      height: "90%",
    },
    headerInfo1: {
      justifyContent: "space-between",
    },
    paraOverlay: {
      height: "62px",
      fontWeight: "400",
      fontSize: "25px",
      top: "50%",
      lineHeight: "31px",
    },
  },
  [theme.breakpoints.down("850")]: {
    paraOverlay: {
      width: "44%",
      marginTop: "-8%",
    },
    paraContainer: {
      marginLeft: "5%",
    },
    imageContainer: {
      width: "60%",
      height: "auto",
    },
  },
  [theme.breakpoints.down("650")]: {
    containerImg: {
      width: "90%",
      height: "100%",
    },
    infoText: {
      fontSize: "28px",
    },
  },
  [theme.breakpoints.down("550")]: {
    headerInfo1: {
      display: "flex",
      flexDirection: "column",
    },
    containerImg: {
      width: "100vw",
      height: "200px",
    },
    infoHeading1: {
      width: "70vw",
      height: "43px",
      fontWeight: "700",
      fontSize: "30px",
      lineHeight: "40px",
      marginLeft: "10%",
    },
    infoText: {
      width: "90vw",
      height: "43px",
      fontWeight: "700",
      fontSize: "32px",
      lineHeight: "43px",
    },
    paraOverlay: {
      width: "70vw",
      height: "54px",
      fontWeight: "400",
      fontSize: "20px",
      top: "20%",
      lineHeight: "28px",
    },
  },
}));
const Info1 = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerInfo1}>
        <Box className={classes.imageContainer}>
          <img src={Ellipse} className={classes.containerImg} alt="ellipse" />

          <Box className={classes.textOverlay}>
            <h2 className={classes.infoHeading1}>What We Do. </h2>
            <p className={classes.paraOverlay}>
              We do lots of stuffs , basically adding value to your product .
            </p>
          </Box>
        </Box>
        <Box className={classes.paraContainer}>
          <p className={classes.infoText}>Digital Marketing</p>
          <p className={classes.infoText}>Digital Marketing</p>
          <p className={classes.infoText}>Digital Marketing</p>
          <p className={classes.infoText}>Digital Marketing</p>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#301E4E", marginTop: "-3%" }}
          >
            VIEW ALL
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Info1;
