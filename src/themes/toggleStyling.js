export const styles = theme => ({
  root: {

  },
  chipSection:{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "10px 10px",


  },
  button: {
    margin: 4,
    padding:"4px 12px"
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  active: {
    backgroundColor:theme.palette.secondary.light,
    borderRadius: "5.2px",
    color: "white",
    padding: "2px 5px",
    margin: 3,
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
      [theme.breakpoints.down('xs')]: {
          fontSize: "13px",

    }
  },
  inactive: {
    backgroundColor: "white",
    color: theme.palette.secondary.light,
    border: "1px solid #8080806e",
    borderRadius: "5.2px",
    padding: "1px 4px",
    textTransform: "uppercase",
    margin: 3,
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
     [theme.breakpoints.down('xs')]: {
          fontSize: "13px",

    }

  },
  buttonSection: {
    marginTop:"10px",
    display: "flex",
    justifyContent: "center"
  }
});
