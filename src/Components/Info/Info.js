import React from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  headerInfo: {
    marginTop: "5%",
  },
  pTag: {
    width: "195px",
    height: "37px",
    marginLeft: "4%",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "25px",
    lineHeight: "33px",
    color: "#463366",
  },
  infoHeading: {
    width: "80%",
    height: "10vh",
    marginLeft: "4%",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "99px",
    lineHeight: "132px",
    letterSpacing: "-0.015em",
    color: "#463366",
  },
  infoPara: {
    width: "90%",
    marginLeft: "4%",
    height: "111px",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "35px",
    lineHeight: "44px",
    letterSpacing: "0.0025em",
    color: "#494949",
  },
  infoButton: {
    padding: "20px 36px",
    width: "30%",
    height: "65px",
    background: "#301e4e",
    borderRadius: "12px",
    color: "white",
    font: "400 17px Source Sans Pro",
    lineHeight: "25px",
    cursor: "pointer",
    marginLeft: "5%",
  },

  [theme.breakpoints.down("1500")]: {
    infoButton: {
      fontSize: "12px",
      padding: "15px 36px",
    },
  },
  [theme.breakpoints.down("1180")]: {
    infoHeading: {
      width: "90%",
      height: "83px",
      fontWeight: "700",
      fontSize: "62px",
      lineHeight: "83px",
      letterSpacing: "-0.005em",
    },
    infoPara: {
      width: "90%",
      height: "93px",
      fontWeight: "400",
      fontSize: "25px",
      lineHeight: "27px",
    },
    infoButton: {
      fontSize: "10px",
      width: "30%",
      height: "6vh",
      padding: "12px 30px",
    },
  },
  [theme.breakpoints.down("825")]: {
    infoButton: {
      marginTop: "2%",
      fontSize: "13px",
      width: "42%",
      height: "6vh",
      padding: "10px 28px",
    },
  },
  [theme.breakpoints.down("550")]: {
    headerInfo: {
      marginTop: "0%",
    },
    infoHeading: {
      width: "60%",
      height: "43px",
      fontWeight: "700",
      fontSize: "30px",
      lineHeight: "43px",
    },
    infoPara: {
      width: "90%",
      height: "54px",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "18px",
    },
    infoButton: {
      fontSize: "10px",
      width: "43%",
      height: "7vh",
      padding: "8px 18px",
    },
  },
  [theme.breakpoints.down("470")]: {
    headerInfo: {
      marginTop: "100px",
    },
    infoPara: {
      marginBottom: "20px",
    },
    infoHeading: {
      font: "600 2rem Playfair Display",
      width: "90%",
      lineHeight: "70px",
      marginLeft: "5%",
    },
  },
}));
const Info = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const classes = useStyles();
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <>
      <Box className={classes.headerInfo}>
        <p className={classes.pTag}>WHO WE ARE</p>
        <p className={classes.infoHeading}>We are Extensive</p>
        <p className={classes.infoPara}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        {width > 450 ? (
          <Button
            variant="contained"
            sx={{
              marginLeft: "4%",
              backgroundColor: "#301E4E",
              padding: "10px",
            }}
          >
            BOOK A FREE MARKETING AUDIT
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              marginLeft: "5%",
              marginTop: "2%",
              backgroundColor: "#301E4E",
              fontSize: "11px",
              width: "70%",
            }}
          >
            Book A FREE MARKETING AUDIT
          </Button>
        )}
      </Box>
    </>
  );
};

export default Info;
