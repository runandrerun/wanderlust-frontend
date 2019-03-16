export const styles = theme => ({
  card: {
    width: 340,
    boxShadow: "none"
  },
  media: {
    height:220,
    objectFit: 'cover',
        borderRadius: 5
  },
  cardContentArea:{
    padding:"4px 0px"
  },
  year:{
    backgroundColor:"#A61D55",
    borderRadius:"3.2px", // This is the border radius Airbnb uses for their little PLUS chips
    color:"white",
    padding:"0 4px" // Same padding that AirBnb uses
  },
  yearArea:{
    textTransform:"uppercase",
    color:"#A61D55", // matching the Airbnb purple
    fontWeight: 600,
    fontSize:12,
    lineHeight:"16px",
    paddingTop:4,

  },
  launchicon: {
    fontSize:12, // I put a little icon next to the original article link
  },
  articleLink:{
    textDecoration:"none",
    color:"#A61D55",
  },
  carouselStyle:{
   height:190,
   objectFit: 'cover',
   borderRadius: 5,
 },
});
