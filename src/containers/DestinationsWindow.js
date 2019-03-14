import React from "react";
import { render } from "react-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { styles } from "../themes/destinationsContainerStyling.js";
import { withStyles } from "@material-ui/core/styles";
import "../themes/centerContainer.css";
import Grid from "@material-ui/core/Grid";
import LocationCard from "../components/DestinationCard.js";

const Row = ({ index, style }) => (
  console.log(this.props)
  const dictionary = this.props.destinations;
  return this.props.destinations.map((
    destination,
    index,
  ) => {
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {" "}
      <LocationCard destination={dictionary[i]} />
    </div>
  })

  // return this.props.destinations.map((destination, index) => {
  //
  // })

);

class DestinationsWindow extends React.Component {
  render() {
    const listLength = this.props.destinations.length;
    return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={listLength}
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
