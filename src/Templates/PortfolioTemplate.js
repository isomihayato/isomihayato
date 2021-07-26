import React, { Component } from 'react';
import {
  Box,
  Grid,
  Typography
} from '@material-ui/core';
import SubTitle from '../Molecules/SubTitle';
import CardComponent from '../Molecules/Surface/Card';

export default class PortfolioTemplate extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm={7} xs={12}>
            <Box
              bgcolor="#f9fff4"
              className="portfolio__wrapper"
            >
              <Grid container className="portfolio__card_wrapper">
                  <Grid item sm={4} xs={12}>
                    <CardComponent
                      title="Seo Labo"
                      contents="京都産業大学総合生命学部瀬尾ゼミHP作成を担当させていただきました。
                      サイト設計、企画提案、コーディングを担当させていただきました。"
                      url="images/cards/seo.png"
                      gitUrl="https://github.com/isomihayato/seo_labo"
                      webUrl="https://seo-labo.jp/"
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <CardComponent
                      title="Ray's様カルテ管理システム"
                      contents="タトゥ施術、アクセサリー販売を行っているRay's&Company様から
                      カルテ管理システム制作させていただきました。システム設計、コーディング、
                      Ruby on Railsを担当させていただきました。
                      (クライアント様からのご依頼でwebでの掲載は控えさせていただきます。)"
                      url="images/cards/rays.png"
                      gitStyle={{color:'darkgrey'}}
                      webStyle={{color:'darkgrey'}}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <CardComponent
                      title="Ray's様東京サイト"
                      contents="タトゥ施術、アクセサリー販売を行っているRay's&Company様から
                      東京支店のサイトを制作させていただきました。いただいたフレームワークから
                      PHPでのコーディングを依頼いただきましたので、
                      Laravelでコーディングさせていただきました。"
                      url="images/cards/rays_tokyo.png"
                      gitUrl="https://github.com/isomihayato/rays_tokyo"
                      webUrl="https://raystokyo.com/"
                    />
                  </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item sm={5} xs={12}>
            <div className="title_wrapper">
                <Typography variant="h2" className="section_title">
                ポートフォリオ
                </Typography>
                <SubTitle TitleContent="portfolio" mt="0px"/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
