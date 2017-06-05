import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import CalendarCom from '../components/calendarCom/CalendarCom';


describe('CalendarCom', function () {
  it('renders without problems', function () {
    var CalendarCom = TestUtils.renderIntoDocument(<Calendar/>);
    expect(CalendarCom).toExist();
  });
});
