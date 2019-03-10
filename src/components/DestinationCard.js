import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Launch from "@material-ui/icons/Launch";
import { styles } from '../themes/destinationCardStyling.js';

export default class DestinationCard extends Component {
  render() {
    const { classes, destination } = this.props;


    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={destination.image1}
        />
        <CardContent className={classes.cardContentArea}>

          <Typography noWrap className={classes.yearArea} component="p">
           Featured in: <span className={classes.year}>{destination.year}</span>  · <a href={destination.article_link} className={classes.articleLink} target="_blank">Original Article <Launch className={classes.launchicon} /></a>
          </Typography>

          <Typography variant="h6" component="h2">
            {destination.destination_name}
          </Typography>
          <div className={classes.snippet_area}>
          <Typography className={classes.snippet_text} noWrap component="p">
           {destination.clean_snippet}
          </Typography>
          <Typography component="p">
          <a href={destination.url} style={{textDecoration:"none", color:"#008489", fontWeight:600, fontSize:12}} className={classes.articleLink} target="_blank">Learn More</a>
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>

    </Card>
    )
  }
};
