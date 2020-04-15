import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Form.css';

export default class DynamicForm extends React.Component{

  state = {

  };

  constructor(props){
    super(props);
  };

  onSubmit = (e) =>{
    e.preventDefault();
    if(this.props.onSubmit) this.props.onSubmit(this.state);
    
  };
  onChange = (e, key) => {
    this.setState({
      [key]:this[key].value
    });
  };



  renderForm() {
    let model = this.props.model;

    let formUI = model.map((m)=>{
      let key = m.key;
      let type = m.type || "text";
      let props = m.props || {};

      return(
        <div key={key} className="form-group">
          <label className="form-label"
          key={"l" + m.key}
          htmlFor={m.key}>
          {m.label}
          </label> 
          <input {...props}
            ref={(key)=>{this[m.key]=key}}
            className="form-input"
            type={type}
            key={"i"+m.key} 
            onChange={(e)=>{this.onChange(e, key)}}           
          
          
          />

        </div>
      );
    });
    return formUI;
  }

  render(){

    let formClasses = 'form-container';
    if (this.props.show){
      formClasses = 'form-container open';
    };
  
    let buttonClasses = 'form-button';
    if (this.props.show){
      buttonClasses = 'form-button open';
    };

    return(
      <div>
        <div className={buttonClasses}
        onClick={this.props.postClickHandler}>
        <h1>+</h1>
        </div>
  
        <div className={formClasses}>
          {/* <div className="form-button-close">X</div> */}
          <h2 className="form-title"> {this.props.title}</h2>
          <form className="form" onSubmit={(e)=>{this.onSubmit(e)}}>

            {this.renderForm()}
            {/* <p>Enter your name:</p>
    
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
              
            </RadioGroup> */}
  
            <button className="submitButton" type="submit">Look Ma, I'm helping!</button>
          </form>
    
          
    
        </div>
        
    
      </div>
    
          
    );

  }
  

};
