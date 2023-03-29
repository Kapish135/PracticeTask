import React from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
import MainImage from "../../assets/Frame-63.png";

const useStyles = makeStyles((theme) => ({
  backgroundimage: {
    width: "100%",
    height: "auto",
    position: "relative",
  },
  overlayDiv: {
    width: "50%",
    height: "23rem",
    position: "absolute",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    bottom: "0",
    opacity: "0.6",
  },
  miniCont: {
    color: "#ff6e6c",
  },
  overlayCont1: {
    width: "70%",
    fontFamily: "Playfair Display",
    marginBottom: "-5%",
    fontStyle: "normal",
    fontWeight: "689",
    fontSize: "90px",
    marginTop: "0%",
    marginLeft: "7%",
    letterSpacing: "-0.015em",
    color: "#463366",
  },
  overlayCont2: {
    width: "80%",
    marginLeft: "7%",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "49px",
    color: "#301e4e",
  },
  [theme.breakpoints.down("1170")]: {
    overlayDiv: {
      height: "max-content",
      top: "30%",
    },
    overlayCont1: {
      fontSize: "62px",
      lineHeight: "83px",
      letterSpacing: "-0.005em",
    },
    overlayCont2: {
      fontSize: "35px",
      lineHeight: "47px",
      letterSpacing: "0.0025em",
    },
  },
  [theme.breakpoints.down("1000")]: {
    overlayDiv: {
      top: "20%",
      justifyContent: "flex-start",
      marginBottom: "20%",
    },
  },
  [theme.breakpoints.down("800")]: {
    overlayDiv: {
      height: "max-content",
    },
    overlayCont1: {
      fontSize: "45px",
      lineHeight: "65px",
      letterSpacing: "-0.005em",
    },
    overlayCont2: {
      fontSize: "23px",
      lineHeight: "35px",
      letterSpacing: "0.0025em",
    },
  },
  [theme.breakpoints.down("675")]: {
    overlayDiv: {
      top: "20%",
      justifyContent: "center",
    },
    overlayCont1: {
      width: "70%",
      fontSize: "35px",
      lineHeight: "40px",
    },
    overlayCont2: {
      width: "95%",
      lineHeight: "30px",
    },
  },
  [theme.breakpoints.down("470")]: {
    overlayDiv: {
      width: "100%",
      height: "100px",
      textAlign: "center",
    },
    overlayCont1: {
      width: "100%",
      fontSize: "35px",
      lineHeight: "35px",
      textAlign: "center",
      marginLeft: "0%",
      padding: "15px 0px",
    },
    overlayCont2: {
      width: "100%",
      fontSize: "14px",
      lineHeight: "19px",
      textAlign: "center",
      marginLeft: "0%",
    },
    backgroundimage: {
      height: "474px",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box height="auto" overflow="hidden">
        <Box>
          <img
            src={MainImage}
            className={classes.backgroundimage}
            alt="Image1"
          />
          <Box className={classes.overlayDiv}>
            <p className={classes.overlayCont1}>
              We are <span className={classes.miniCont}>Extensive.</span>
            </p>
            <p className={classes.overlayCont2}>
              Helping you stand out in a crowded market
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
