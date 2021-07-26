import React, { Component, Fragment } from 'react';

export default class SkewLetter extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      transform: `rotate3d(0, 1, 0, ${this.props.angle}deg)`,
      color: this.props.color,
      fontWeight: 300,
      display: 'inline-block'
    }
    return (
      <Fragment>
        <div style={styles} className="kv__skew">
          {this.props.ContentLetter}
        </div>
      </Fragment>
    );
  }
}
