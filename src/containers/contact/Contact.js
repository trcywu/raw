import React from 'react';
import WriteButton from '../../components/writeButton/WriteButton';

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
    </div>

  )
}

export default Contact;
