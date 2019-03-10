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
import './themes/headerStyling.js';

class NavContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <Grid justify="space-between" container spacing={24}>
              <Grid item className={classes.grid}>
                <Explore className={classes.mainIcon} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon className={classes.magnifyingGlass} />
                  </div>
                  <InputBase
                    placeholder="Filter Places..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
              </Grid>
              <Grid item className={classes.grid}>
                <div>
                  <Button className={classes.menubuttons} color="inherit">
                    Help
                  </Button>
                  <Button className={classes.menubuttons} color="inherit">
                    Sign Up
                  </Button>
                  <Button className={classes.menubuttons} color="inherit">
                    Log in
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};
s
export default withStyles(styles)(NavContainer);
