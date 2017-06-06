import React, { Component } from 'react';
import './writeButton.css';


export default class WriteButton extends Component {
  render() {


    return (
      <div>
      <button className='write-button' onClick={this.props.onClick}>
        {this.props.buttonName}
      </button>
      </div>
      );
  }
}
