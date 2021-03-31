import { AppBar, colors, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  toolbarStyles: {
    background: "#800080	",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.toolbarStyles}>
      <Toolbar>
        <MenuIcon />

        <Typography className={classes.typographyStyles}>
          This is the app bar
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
