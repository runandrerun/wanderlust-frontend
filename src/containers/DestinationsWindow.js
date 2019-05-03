import React, { Component } from "react";
import { render } from "react-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { styles } from "../themes/destinationsContainerStyling.js";
import { withStyles } from "@material-ui/core/styles";
import "../themes/centerContainer.css";
import Grid from "@material-ui/core/Grid";
import DestinationCard from "../components/DestinationCard.js";

const CARD_SIZE = 340;

class Row extends Component {
  render() {
    console.log(this.props)
    const allDestinations = [];
    const { data, index, style } = this.props;
    const dictionary = this.props.destinations;
    const creation = () => {
      this.props.destinations.map((
      destination,
      index,
    ) => {
      allDestinations.push(<DestinationCard key={index} destination={dictionary[index]} />)
      });
    };
    return (
      <div className={this.props.classes.Row} style={style}>
        {allDestinations}
      </div>
    )
  }
};

// <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
  // {" "}

class DestinationsWindow extends Component {
  render() {
    const listLength = this.props.destinations.length;
    console.log(this.props.destinations)
    return (
    <AutoSizer>
      {({ height, width }) => (

        <List
          className="List"
          height={height}
          itemCount={100}
          itemSize={35}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  )};
};

export default withStyles(styles)(DestinationsWindow);
