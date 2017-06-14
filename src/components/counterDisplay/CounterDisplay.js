import React, { Component } from 'react';


export default class CounterDisplay extends Component {
  render() {
    return(
      <div>
        <div>{this.props.counterProps}</div>

      </div>

    );
  }
}
