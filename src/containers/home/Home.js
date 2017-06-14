import React, { Component } from 'react';
import CalendarCom from '../../components/calendarCom/CalendarCom';
import TextEditor from '../../components/textEditor/TextEditor';
import WriteButton from '../../components/writeButton/WriteButton';
import ItemList from '../../components/itemList/ItemList';
import Counter from '../../components/counter/Counter';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div>
          <WriteButton buttonName='Write'/>
          <Counter name='Days of writing'/>

            <p className="lead">
              This is the outside div of the calender
            </p>
            <CalendarCom />
            <div className="textEditor">
            <TextEditor />
            </div>
          </div>

        </div>

        <div className="container">

          This is an extra container div
          <ItemList />

        </div>
      </div>
    );
  }
}
