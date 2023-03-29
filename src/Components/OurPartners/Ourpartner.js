import React, { useEffect } from "react";
import "./Ourpartner.css";
import data from "./Data";
import data1 from "./Data1";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerOurpartners: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
  headingOurpartner: {
    marginTop: "0%",
    width: "25%",
    height: "10vh",
    marginLeft: "4%",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "689",
    fontSize: "99px",
    lineHeight: "132px",
    letterSpacing: "-0.015em",
    color: "#301e4e",
  },
  iconImageContainer: {
    height: "50%",
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  pOurpartner: {
    width: "60%",
    marginLeft: "4%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "35px",
    lineHeight: "44px",
    letterSpacing: "0.0025em",
    marginTop: "10%",
    color: "#ff6e6c",
  },
  text: {
    width: "30%",
    height: "4vh",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "35px",
    lineHeight: "47px",
    textAlign: "center",
    letterSpacing: "0.0025em",
    color: "#1f1235",
  },
  iconsOurpartner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    maxHeight: "100%",
  },
  [theme.breakpoints.down("1100")]: {
    headingOurpartner: {
      height: "5vh",
      fontWeight: "700",
      fontSize: "62px",
      lineHeight: "83px",
      letterSpacing: "-0.005em",
    },
    pOurpartner: {
      width: "50%",
      height: "3vh",
      fontWeight: "400",
      fontSize: "25px",
      lineHeight: "31px",
    },
    text: {
      width: "70%",
      height: "33px",
      fontWeight: "400",
      fontSize: "25px",
      lineHeight: "33px",
    },
  },
  [theme.breakpoints.down("700")]: {
    pOurpartner: {
      width: "90%",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "15px",
    },
    headingOurpartner: {
      width: "20%",
      height: "3vh",
      fontWeight: "700",
      fontSize: "40px",
      lineHeight: "53px",
    },
  },
  [theme.breakpoints.down("550")]: {
    text: {
      width: "20%",
      height: "2vh",
      fontWeight: "600",
      fontSize: "15px",
      lineHeight: "19px",
      marginLeft: "-45%",
    },

    headingOurpartner: {
      height: "5vh",
    },
    pOurpartner: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "15px",
    },
    headerOurpartners: {
      marginTop: "10%",
    },
  },
}));
const Ourpartner = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerOurpartners}>
        <p className={classes.headingOurpartner}>Our Partners.</p>
        {width > 550 ? (
          <p className={classes.pOurpartner}>Your success is our success</p>
        ) : (
          <p className={classes.pOurpartner}>
            We do lots of stuffs , basically adding value to your product .
          </p>
        )}
        {width > 550 ? (
          <Box className="showcase_partners">
            {data.map((item, index) => {
              return (
                <Box className={classes.iconsOurpartner} key={index}>
                  <Box className={classes.iconImageContainer}>
                    <img
                      src={item.src}
                      className={classes.iconImage}
                      alt="icon_image"
                    />
                  </Box>
                  <p className={classes.text}>{item.text}</p>
                </Box>
              );
            })}
          </Box>
        ) : (
          <Box className="showcase_partners">
            {data1.map((item, index) => {
              return (
                <Box className={classes.iconsOurpartner} key={index}>
                  <Box className={classes.iconImageContainer}>
                    <img
                      src={item.src}
                      className={classes.iconImage}
                      alt="icon_image"
                    />
                  </Box>
                  <p className={classes.text}>{item.text}</p>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Ourpartner;
