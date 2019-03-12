import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Launch from "@material-ui/icons/Launch";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../themes/destinationCardStyling.js';

class DestinationCard extends Component {
  render() {
    const { classes } = styles;

    return (
    <Card className={this.props.classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={this.props.classes.media}
          image={this.props.destination.image1}
        />
        <CardContent className={this.props.classes.cardContentArea}>

          <Typography noWrap className={this.props.classes.yearArea} component="p">
           Featured in: <span className={this.props.classes.year}>{this.props.destination.year}</span>  · <a href={this.props.destination.article_link} className={this.props.classes.articleLink} target="_blank">Original Article <Launch className={this.props.classes.launchicon} /></a>
          </Typography>

          <Typography variant="h6" component="h2">
            {this.props.destination.destination_name}
          </Typography>
          <div className={this.props.classes.snippet_area}>
          <Typography className={this.props.classes.snippet_text} noWrap component="p">
           {this.props.destination.clean_snippet}
          </Typography>
          <Typography component="p">
          <a href={this.props.destination.url} style={{textDecoration:"none", color:"#008489", fontWeight:600, fontSize:12}} className={this.props.classes.articleLink} target="_blank">Learn More</a>
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    )
  }
};

export default withStyles(styles, { withTheme: true })(DestinationCard);
