import React, { Component } from 'react';
import {
	Box,
  Layout,
  Grid
} from '@material-ui/core';
import BadgeRectangle from '../Atoms/BadgeRectangle';
import NameTitle from '../Molecules/NameTitle';
import SkewLetter from '../Atoms/SkewLetter';

export default class SubTitle extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Grid container>
            <Grid item sm={5} xs={12} className="kv__sp_background">
							<div
  							className="kv__namewrapper"
							>
								<NameTitle
									title="フリーランスエンジニア"
									name="磯海隼人"
                  className="kv__title"
								/>
  						</div>
          </Grid>
					<Grid item sm={7} xs={12}>
            <Box
							height="110vh"
						>
              <div className="video_wrapper">
                  {/* <video src="tree.mp4" muted autoplay loop playinline>
                  </video> */}
                  <img 
                    src="tree.gif" 
                    className="kv__tree"
                  />
              </div>
						</Box>
					</Grid>	 
          </Grid>
      </div>
    );
  }
}
