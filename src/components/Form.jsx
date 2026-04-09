import React from 'react';
import '../styles/Form.css';

function Form() {
  return (
    <div className="signup-container">
      <h2 className="form-title">Sign up</h2>
      
      <div className="input-group">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
      </div>

      <div className="button-wrapper">
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Form;