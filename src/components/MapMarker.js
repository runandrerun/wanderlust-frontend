import React, { Component } from "react";

class MapMarker extends React.Component {
  render() {
    const {
      classes,
      pageid,
      hoveredCardId
    } = this.props;

    return (
      <div
        className={classes.markerParent}
      >
        <span
          className={classNames(
            classes.tooltips_span,
            pageid == hoveredCardId &&
              classes.niftyHoverBackground
          )}
        >
          {this.props.name}
        </span>
      </div>
    );
  }
}
