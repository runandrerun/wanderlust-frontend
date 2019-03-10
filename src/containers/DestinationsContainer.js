import React, { Component } from "react";
import LocationCard from "../components/DestinationCard.js";
import Grid from "@material-ui/core/Grid";
import { styles } from "../themes/destinationsContainerStyling.js";

export default class DestinationsContainer extends Component {
  render() {
    const { destinations, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          Container
          justify="flex-start"
          spacing={16}
        >
          {destinations.map((
            destination,
            index
          ) => (
            <Grid key={index} item>
              {" "}
              <LocationCard location={destination} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
