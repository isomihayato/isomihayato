import React, { Component, Fragment} from 'react';
import {
  Box,
  Grid,
  Typography
} from '@material-ui/core';
import SubTitle from '../Molecules/SubTitle';

const styles = {
    width: '120px',
    borderBottom: '80px solid orange',
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    height: 0
}

export default class ContactTemplate extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Box 
          bgcolor="orange" 
          style={{
              height:'91vh',
              width: '99vw',
              position:'absolute',
              zIndex:-2
            }}
        >
            <Box 
            bgcolor="orange"
            width="99vw"
            height="80vh"
            style={{
                transform: 'skewY(10deg) translateY(-15vh)',
                position:'absolute',
                zIndex:-1
            }}
            >
                <div style={{marginLeft:80,marginTop:'40vh',transform: 'skewY(-10deg)'}}>
                    <Typography variant="h2" style={{lineHeight: 0,zIndex:1000}}>
                    連絡先
                    </Typography>
                    <SubTitle TitleContent="contact adress" mt="0px"/>
                    <Typography variant="h4" style={{paddingLeft:'10vw',paddingTop:'5vh'}}>
                      E-Mail：isomihayato@gmail.com

                    </Typography>
                </div>
            </Box>
        </Box>
      </Fragment>
    );
  }
}
