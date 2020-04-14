import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Form.css';

const DynamicForm = props =>(
  <div>
    <div className="form-button">
    <h1>+</h1>
    </div>
    
    <div className="form-container">
      {/* <div className="form-button-close">X</div> */}
      <h1> Thanks for helping!</h1>
      <form className="form">
        <p>Enter your name!</p>

        <input type="text" name="name"/>

        <p>Enter what you typically do!</p>

        <input type="text" name="name"/>

        <p>Enter what you're doing to help!</p>

        <input type="text" name="name"/>
        <p>Enter where you're based!</p>    

        <input type="text" name="name"/>
        <RadioGroup aria-label="quiz" name="quiz">
          <FormControlLabel value="best" control={<Radio />} label="OR you could let me grab your geolocation?" />
        </RadioGroup>
        <input className="submitButton" type="submit" value="Look Ma, I'm helping!"></input>
      </form>

      

    </div>
    

  </div>

  

);

export default DynamicForm