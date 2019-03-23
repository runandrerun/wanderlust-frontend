export const styles = theme => ({
  tooltips: {
    position: "relative",
    display: "inline",
  },
  tooltips_span: {
    position: "absolute",
    minWidth: "80px",
    color: "#262626",
    background: "#FFFFFF",
    border: ".5px solid #BFBFBF",
    fontSize:"12px",
    fontWeight:600,
    // height: "30px",
    // lineHeight: "30px",
    textTransform:"uppercase",
    textAlign: "center",
    visibility: "visible",
    padding:"4px 4px",
    borderRadius: "2px",
    top: "-35px",
    right: "-40px",
    "&:before":{
      content: "''",
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: "-12px",
      width: "0",
      height: "0",
      // borderTop: "4px solid #BFBFBF",
      // borderRight: "4px solid transparent",
      // borderLeft: "4px solid transparent",
    },
    "&:after":{
    content: "''",
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-4px",
    width: "0",
    height: "0",
    borderTop: "8px solid #FFFFFF",
    borderRight: "8px solid transparent",
    borderLeft: "8px solid transparent"
    },
  },
  hover_tooltips_span: {
    visibility: "visible",
    opacity: "0.7",
    bottom: "30px",
    left: "50%",
    marginLeft: "-76px",

  },
  niftyHoverBackground:{
    backgroundColor:theme.palette.primary.dark,
    color:"white",
    border:"none",
    zIndex:100,
    "&:after":{
    content: "''",
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-4px",
    width: "0",
    height: "0",
    borderTop: "8px solid #ff8e8c",
    borderRight: "8px solid transparent",
    borderLeft: "8px solid transparent"
    },
  },
  markerParent:{
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center"
}
});
