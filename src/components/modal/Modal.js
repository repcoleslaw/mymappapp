import React from 'react';
import './Modal.css';

const modalPopup = props => {

  let modalClasses = 'modal-container';
  if (props.show) {
    modalClasses = 'modal-container open';
  }

  return (
    <div className={modalClasses}>
      <h1>What is this?</h1>

      <p>The Find the Response project is a very simple web-application for people to follow trying to see the positivity that arises in times of crisis.The COVID-19 pandemic has gripped many data scientists, epidemologists, healthcare providers, and economists to innudate the world with the severity of the situation. AND RIGHTLY SO! Dashboards, reports, exponential scales, tiger-kings, and bears, oh my! It can be exhausting... </p>
      <p>That said, the sheer amount of mobilization against this disruptive lifestyle has truly been remarkable and this simple project is to visualize it. We want to highlight the good, share the good, and encourage positivity through this. Contribute if you feel so inclined!</p>
    </div>
  );
};

export default modalPopup;