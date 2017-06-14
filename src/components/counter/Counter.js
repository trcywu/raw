import React, { Component } from 'react';
import CounterDisplay from '../../components/counterDisplay/CounterDisplay';
import WriteButton from '../../components/writeButton/WriteButton';


export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({counter: this.state.counter+1});
  }

  handleDecrement() {
    this.setState({counter: this.state.counter-1});
  }


  render() {
    return(

      <div>
        <h4>{this.props.name}</h4>
        <WriteButton buttonName='-' onClick={this.handleDecrement}/>
        <CounterDisplay counterProps = {this.state.counter}/>
        <WriteButton buttonName='+' onClick={this.handleIncrement}/>
      </div>

    );
  }
}
