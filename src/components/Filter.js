import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Explore from "@material-ui/icons/Explore";
import Button from "@material-ui/core/Button";
import { styles } from "../themes/filterStyling.js";

class Filter extends Component {
  render() {
    const { classes } = styles;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={24}>
              <Grid item className={classes.grid}>
                <Button
                  className={classes.buttons}
                  variant="outlined"
                  color="primary"
                >
                  Year
                </Button>
              </Grid>
              <Grid item className={classes.grid}>
                <div />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Filter);
