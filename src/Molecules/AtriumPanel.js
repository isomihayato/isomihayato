import React, { Component } from 'react';
import {
    Avatar,
    Box,
    Typography
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './css/atrium.css';


export default class AtriumPanel extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Box
          border={1}
          bgcolor='white'
          className="atrium__outer_box"
        >
          <Avatar
            className="atrium__avatar"
            style={{backgroundColor:'white',width:80,height:80}}
          >
            <img src={this.props.url} className="atrium__img"/>
          </Avatar>
          <Rating 
            name="read-only" 
            value={this.props.rate} 
            readOnly
            className="atrium__rating"
          />
          <Typography 
            variant="body1"
            gutterBottom 
            className="atrium__body"
           >
            {this.props.body}
          </Typography>
        </Box>
      </div>
    );
  }
}
