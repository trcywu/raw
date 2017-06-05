import React, { Component } from 'react';
import './writeButton.css';


export default class WriteButton extends Component {
  render() {

    function hello() {
      alert ('hello');
    }


    return (
      <div>
      <button className='write-button' onClick={hello}>
        {this.props.buttonName}
      </button>
      </div>
      );
  }
}
