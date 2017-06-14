import React, { Component } from 'react';
import CalendarCom from '../../components/calendarCom/CalendarCom';
import TextEditor from '../../components/textEditor/TextEditor';
import BodiumCastle from '../../components/bodiumCastle/BodiumCastle';
import FruitLoop from '../../components/fruitLoop/FruitLoop';
import WriteButton from '../../components/writeButton/WriteButton';


export default class About extends Component {

  constructor(props){
    super(props);

    this.state = {
      bodiumCastleShowing: false,
      fruitLoopShowing: false
    };
    this.showBodium = this.showBodium.bind(this);
    this.showFruitLoop = this.showFruitLoop.bind(this);

  }

  showBodium() {
    this.setState({bodiumCastleShowing: !this.state.bodiumCastleShowing});
  }

  showFruitLoop() {
    this.setState({
      fruitLoopShowing : !this.state.fruitLoopShowing
    });
  }


  render() {


    return (
      <div className="container">
        <h1 className="display-3">About Us</h1>
        <p>
          Thanks for checking this out. This project was created by
          <a href="https://twitter.com/_cloudmu" target="_blank"> @_cloudmu</a>,
          as a playground to learn and experiment some of the exciting technologies such as
          <a href="https://github.com/facebook/react" target="_blank"> React</a> and
          <a href="https://github.com/rackt/redux" target="_blank"> Redux</a>.
        </p>
        <p>
          Along with other great libraries, such as <a href="https://github.com/rackt/react-router" target="_blank"> React-Router</a> for routing,
          <a href="http://babeljs.io" target="_blank"> Babel </a> for next-gen Javascript, and
          <a href="http://webpack.github.io" target="_blank"> Webpack</a> for bundling and devtools,  web development has never been more fun
          and productive.
        </p>

          <WriteButton buttonName="Show BodiumCastle" onClick={this.showBodium}/>
      <div className="BodiumCastle">
        {this.state.bodiumCastleShowing ? <BodiumCastle /> : null}
      </div>
        <WriteButton buttonName="Show FruitLoop" onMouseOver={this.showFruitLoop}/>

        <div>
          {this.state.fruitLoopShowing ? <FruitLoop /> : null}
        </div>
      </div>
    );
  }
}
