import React, { Component } from "react";
import LocationCard from "../components/DestinationCard.js";
import Grid from "@material-ui/core/Grid";
import { styles } from "../themes/destinationsContainerStyling.js";
import { withStyles } from "@material-ui/core/styles";
import "../themes/centerContainer.css";

class DestinationsContainer extends Component {
  render() {
    const { classes } = styles;
    console.log('Destinations', this.props)
    return (
      <div>
        <Grid
          className={this.props.classes.root}
          container
          justify="flex-start"
          spacing={16}
          alignItems="center"
        >
          {this.props.destinations.map((
            destination,
            index
          ) => (
            <Grid key={index} item>
              {" "}
              <LocationCard destination={destination} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DestinationsContainer);
