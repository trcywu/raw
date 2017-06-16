import React from 'react';
import WriteButton from '../../components/writeButton/WriteButton';
import DataGrid from '../../components/dataGrid/DataGrid';

//this is a stateless component that is just returning some html


const Contact = () => {
  return(
    <div>
      <form>
        <input type='test' required placeholder='Your name'/>
        <br />
        <input type='email' required placeholder='abc@email.me'/>
        <br />
        <WriteButton buttonName='submit' />
      </form>

      <DataGrid />


    </div>

  )
}

export default Contact;
