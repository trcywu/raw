import React, { Component } from 'react';
import WriteButton from '../../components/writeButton/WriteButton';


export default class PhotoGrid extends Component {
  render() {
    return (

          <div>
            <form>
              <h2>Please enter a store</h2>
              <input type='text' required placeholder="type something"/>
              <WriteButton type='submit' buttonName='enter'/>
            </form>
          </div>
    );
  }
}
