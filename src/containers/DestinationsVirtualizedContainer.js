import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import DestinationCard from "../components/DestinationCard.js";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import memoize from "memoize-one";
import { styles } from "../themes/virtualizedStyles.js";
import PaginationComponent from './components/PaginationComponent.js';
import Typography from "@material-ui/core/Typography";

const CARD_SIZE = 340;

const { classes } = styles;

class Row extends PureComponent {
  render() {
    const { data, index, style } = this.props;
    const { classes, itemsPerRow, destinations } = data;
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, destinations.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <DestinationCard key={i} destination={destinations[i]} />
      );
    }

    return (
      <div className={classes.Row} style={style}>
        {items}
      </div>
    );
  }
}

class DestinationsGrid extends Component {

  state = {
    currentPage: 1,
    hoveredCardId: ""
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
  })};

  getItemData = memoize((classes, itemsPerRow, destinations) => ({
    classes,
    itemsPerRow,
    destinations
  }))

  render() {
    const { destinations, classes } = this.props;
    // for pagination
    const { currentPage } = this.state;
    const resultsPerPage = 30;
    const pageCount = Math.ceil(destinations.length / resultsPerPage);
    const total = Math.ceil(destinations.length);
    const offset = (currentPage - 1) * resultsPerPage;
    const destinationsSlicedDownOnPage = destinations.slice(
      offset,
      offset + resultsPerPage
    );

    return (
      <div style={{ marginTop: "180px", height: "80vh" }}>
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / CARD_SIZE) || 1;
            const rowCount = Math.ceil(destinations.length / itemsPerRow);
            const itemData = this.getItemData(classes, itemsPerRow, destinations);

            return (
              <div>
                <List
                  height={height}
                  itemCount={rowCount}
                  itemData={itemData}
                  itemSize={CARD_SIZE}
                  width={width}
                >
                  {Row}
                </List>
              </div>
            );
          }}
        </AutoSizer>
        {total > 20 &&
           <div className={classes.paginationSection}>
             <PaginationComponent
               total={total}
               resultsPerPage={resultsPerPage}
               pageCount={pageCount}
               currentPage={currentPage}
               handlePageChange={this.handlePageChange}
               offset={offset}
             />
           </div>
         }
       )
    );
  }
}

DestinationsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DestinationsGrid);
