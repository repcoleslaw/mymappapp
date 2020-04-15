import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Form.css';

const DynamicForm = props =>{

  let formClasses = 'form-container';
  if (props.show){
    formClasses = 'form-container open';
  };

  let buttonClasses = 'form-button';
  if (props.show){
    buttonClasses = 'form-button open';
  };


  
  return(
    <div>
      <div className={buttonClasses}
      onClick={props.postClickHandler}>
      <h1>+</h1>
      </div>

      <div className={formClasses}>
        {/* <div className="form-button-close">X</div> */}
        <p className="form-title"> <b>POST</b> The Good</p>
        <form className="form">
          <p>Enter your name:</p>
  
          <input type="text" name="name" placeholder="Jane Doe"/>
  
          <p>Enter what you typically do:</p>
          <input type="text" name="name" placeholder="Hockey Equipment, Beer, etc."/>
  
           <p>Enter what you're doing to help:</p>
           <input type="text" name="name" placeholder="PPE - Medical Devices - MICU - etc."/>
 
          <p>Enter where you're based:</p>    
          <input type="text" name="name" placeholder="city"/>
 
          <RadioGroup>
          <p>OR, for a more accurate picture, share your geolocation?</p>
            <FormControlLabel value="true" control={<Radio />} label="sure, why not."/>
            
          </RadioGroup>
          
          <input className="submitButton" type="submit" value="Look Ma, I'm helping!"></input>
        </form>
  
        
  
      </div>
      
  
    </div>
  
    
  
  );

}


export default DynamicForm