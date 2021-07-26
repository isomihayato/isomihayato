import React, { Component, Fragment} from 'react';
import {
  Box,
  Grid,
  Typography
} from '@material-ui/core';
import SubTitle from '../Molecules/SubTitle';
import './css/about.css'


export default class AboutTemplate extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item sm={12}>
            <div className="skill__wrapper">
                  <Typography 
                    variant="h2" 
                    className="section_title"
                    style={{position:'absolute',transform: 'translateY(-40px)'}}
                  >
                  私について
                  </Typography>
                  <SubTitle TitleContent="about" mt="0px"/>
              </div>
          </Grid>
          <Grid item sm={12}>
            <Box className="about__body_box">
                <p>磯海隼人と申します！
                2020年テックキャンプ卒業後、<br/>フリーランスとしてデザイン・コーディング・
                WordPressサイト構築・Ruby on Rails などフレームワークを使った開発
                などを主に活動しております。<br/><br/>
                25歳独身、大阪府箕面市在住。野菜や花を育てるのがとても好きで、
                最近ついに農地を借りました。<br/>
                また、趣味でswiftやKotlinでアプリやゲームを作ってます！<br/><br/>
                私の強みは、デザイン・コーディング・WordPress・フレームワーク開発・
                保守まで意識した開発などWeb全般に対応できることです。</p>
            </Box>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
