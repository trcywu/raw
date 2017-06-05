import Calendar from 'rc-calendar';
import React, { Component} from 'react';
import moment from 'moment';
import './calendar.css';


export default class CalendarCom extends Component {
  constructor(props) {
    super(props);
    this.disabledDate = this.disabledDate.bind(this);
    //binding in the constructor for faster performance
  }

disabledDate(i) {
    if (!i) {
      // once we pass this function through calendar below, it loops through the calendar object
      return false;
    }
    const date = moment();
    return i.valueOf()+(1000*60*60*24) < date.valueOf();  // can not select days before today
  }


  render() {
    return (
      <div>
        <Calendar
            disabledDate={this.disabledDate}

          />
        <div className="strikeout">this is supposed to strike out</div>
        <div className="example">testing</div>
      </div>
    );
  }
}
