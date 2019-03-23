import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker.js";
import { withStyles } from "@material-ui/core/styles";

return {
  fullscreenControl: false,
  mapTypeControl: false,
  panControl: false,
  streetViewControl: false,
  zoomControl: "true",
  gestureHandling: "greedy"
};
};

const styles = theme => ({});

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30,
      lng: -30
    },
    zoom: 0
  };
  render() {
    const {
      classes,
      locations,
      hoveredCardId,
      pageid
    } = this.props;
    let MapMarkers = locations.map(
      (location, index) => {
        return (
          <MapMarker
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            name={
              location.location_name
            }
            pageid={location.pageid}
            hoveredCardId={
              hoveredCardId
            }
          />
        );
      }
    );
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
              "AIzaSysBBvQLsewI7BPpXln_Jzl_tIUVsH1f775C7GXM",
            v: "3.31"
          }}
          defaultCenter={
            this.props.center
          }
          defaultZoom={this.props.zoom}
          hoverDistance={20 / 2}
          options={createMapOptions}
        >
          {MapMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

MapAndMarkers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Map);
