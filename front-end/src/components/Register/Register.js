import React, { useState } from 'react';
import './Register.css';
import Register from './RegisterForm';
import RegisterSuccess from './RegisterSuccess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <Register submitForm={submitForm} />
        ) : (
          <RegisterSuccess />
        )}
      </div>
    </>
  );
};

export default Form;