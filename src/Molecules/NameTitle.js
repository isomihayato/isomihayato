import React, { Component } from 'react';
import TitleMarge from '../Atoms/TitleMarge';
import SkewLetter from '../Atoms/SkewLetter';

export default class NameTitle extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="kv__title">{this.props.title}</div>
        <TitleMarge
          component={<div className="kv__name">{this.props.name}</div>}
        />
        <SkewLetter
            angle={45}
            color="#707070"
            ContentLetter="Isomi Hayato"
        />	
      </div>
    );
  }
}
