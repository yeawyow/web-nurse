import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imageWrapper: {
    // flexBasis: "50%",
    //height: 0,
    // paddingBottom: "100%",
    // position: "relative",
  },
  img: {
    // position: "absolute",
    //  top: 0,
    //  left: 0,
    //  width: "100%",
    // height: "100%",
    // objectFit: "cover",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.imageWrapper}>
        <img
          className={classes.img}
          src={`${process.env.PUBLIC_URL}/images/brandner/site-logo.png`}
        />
      </div>
    </div>
  );
}
