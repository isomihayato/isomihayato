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
        <Grid container>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={11}>
            <Box
                bgcolor="#EFFCFF"
                height="90vh"
            >
            <div style={{paddingTop:60,paddingLeft:120}}>
                <Typography 
                  variant="h2" 
                  style={{position:'absolute',lineHeight: 0,zIndex:1000}}
                >
                スキル
                </Typography>
                <SubTitle TitleContent="skill" mt="0px"/>
            </div>
              <Box style={{marginLeft:140}}>
                <Grid container>
                  <Grid item xs={4}>
                    <AtriumPanel
                      url="images/icons/html.svg"
                      rate={3}
                      body="基本的なコーディングは問題ありません。BEMの使用経験もあります。"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <AtriumPanel
                      url="images/icons/react.svg"
                      rate={2}
                      body="React.js公式チュートリアルを経て実務で扱うようになりました。
                      経験年数は１年ほどです。Reduxはあまり使ったことがなく、hookをよく使います。"
                    />
                  </Grid>
                  <Grid item xs={4}>
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
                  <Grid item xs={4}>
                    <AtriumPanel
                      url="images/icons/laravel.svg"
                      rate={2}
                      body="テックキャンプで学んでから実務で一度使用したことがある程度です。
                      基本的なことはかけますが、経験年数が半年と短いためこのレーティング
                      をつけました。"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <AtriumPanel
                      url="images/icons/aws.svg"
                      rate={3}
                      body="Webサイトに関するAWS上の基本的操作はできます。"
                    />
                  </Grid>
                  <Grid item xs={4}>
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
