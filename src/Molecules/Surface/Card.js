import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Button,
  Typography
 } from '@material-ui/core';
 import GitHubIcon from '@material-ui/icons/GitHub';
 import WebIcon from '@material-ui/icons/Web';

export default class CardComponent extends Component{
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Card style={{maxWidth:'100%',margin:10}}>
          <CardActionArea>
            <CardMedia
              style={{height:140}}
              image={this.props.url}
              title="サイト画像"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.contents}
              </Typography>
            </CardContent>
            <CardActions>
            <Link href={this.props.gitUrl} onClick={(event) => event.stopPropagation()}>
              <GitHubIcon style={this.props.gitStyle}/>
            </Link>
            <Link href={this.props.webUrl} onClick={(event) => event.stopPropagation()}>
              <WebIcon style={this.props.webStyle}/>
            </Link>
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}
CardComponent.defaultProps = {
  gitStyle:{
    color: 'black'
  },
  webStyle:{
    color:'black'
  }
}