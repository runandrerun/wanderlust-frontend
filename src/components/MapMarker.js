import React, { Component } from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import Place from "@material-ui/icons/Place";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../themes/markerStyling.js";

class MapMarker extends Component {
  render() {
    const {
      classes,
      pageid,
      hoveredCardId,
      styles
    } = this.props;

    return (
      <div
        className={this.props.classes.markerParent}
      >
        <span
          className={classNames(
            this.props.classes.tooltips_span,
            this.props.pageid == this.props.hoveredCardId &&
              this.props.classes.niftyHoverBackground
          )}
        >
          {this.props.name}
        </span>
      </div>
    );
  }
}

MapMarker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MapMarker);
