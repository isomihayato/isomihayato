import React, { Component } from 'react';
import BadgeRectangle from '../Atoms/BadgeRectangle';

export default class SubTitle extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const mt = this.props.mt || 25
    const subTitleStyles = {
      marginTop: `${mt}px`
    }

    return (
      <div>
        <div style={subTitleStyles} className="subtitle_wrapper">
          <BadgeRectangle/>
          <div className="subtitle">
            {this.props.TitleContent}
          </div>
        </div>
      </div>
    );
  }
}
