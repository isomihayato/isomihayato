import React, { Component } from 'react';
import {
  Box,
  Grid,
  Typography
} from '@material-ui/core';
import SubTitle from '../Molecules/SubTitle';
import AtriumPanel from '../Molecules/AtriumPanel';

export default class PortfolioTemplate extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container className="skill__sp_top">
          <Grid item sm={1}>
          </Grid>
          <Grid item sm={11}>
            <Box
                bgcolor="#EFFCFF"
                className="skill__box"
            >
            <div className="skill__wrapper">
                <Typography 
                  variant="h2" 
                  className="section_title"
                  style={{position:'absolute',transform: 'translateY(-40px)'}}
                >
                スキル
                </Typography>
                <SubTitle TitleContent="skill" mt="0px"/>
            </div>
              <Box className="skill__inner_box">
                <Grid container>
                  <Grid item sm={4} xs={12}>
                    <AtriumPanel
                      url="images/icons/html.svg"
                      rate={3}
                      body="基本的なコーディングは問題ありません。BEMの使用経験もあります。"
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <AtriumPanel
                      url="images/icons/react.svg"
                      rate={2}
                      body="React.js公式チュートリアルを経て実務で扱うようになりました。
                      経験年数は１年ほどです。Reduxはあまり使ったことがなく、hookをよく使います。"
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <AtriumPanel
                      url="images/icons/typescript.svg"
                      rate={2}
                      body="Reactと経験年数は同じで１年です。TypeScriptはVSCodeと相性もよく、
                      大好きです。(当サイトは１年以上前に制作したため、
                      JSで実装しております)"
                    />
                  </Grid>
                </Grid>

                <Grid container style={{margin:'20px 0'}}>
                  <Grid item sm={4} xs={12}>
                    <AtriumPanel
                      url="images/icons/laravel.svg"
                      rate={2}
                      body="テックキャンプで学んでから実務で一度使用したことがある程度です。
                      基本的なことはかけますが、経験年数が半年と短いためこのレーティング
                      をつけました。"
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <AtriumPanel
                      url="images/icons/aws.svg"
                      rate={3}
                      body="Webサイトに関するAWS上の基本的操作はできます。"
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <AtriumPanel
                      url="images/icons/rails.svg"
                      rate={4}
                      body="複雑なコードをスケッチから書くことはできませんが、
                      基本的なコードは問題なくかけます。"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
