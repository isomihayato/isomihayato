import React, { Component } from 'react';
import {
    Avatar,
    Box,
    Typography
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';



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
          style={{
            width: '24vw',
            height: '30vh',
            display: 'inline-block',
          }}
        >
          <Avatar
          style={{
            margin: '0 auto',
            width: '80px',
            height: '80px',
            marginTop:'15px',
            backgroundColor:'white'
          }}
          >
            <img src={this.props.url} style={{width:'80%',height:'80%'}}/>
          </Avatar>
          <Rating 
            name="read-only" 
            value={this.props.rate} 
            readOnly
            style={{marginLeft:'32%'}}
          />
          <Typography 
            variant="body1"
            gutterBottom 
            style={{margin: '20px 25px 0 25px'}}
           >
            {this.props.body}
          </Typography>
        </Box>
      </div>
    );
  }
}
