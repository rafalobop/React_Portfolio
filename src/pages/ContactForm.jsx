import React from 'react';
import '../css/form.css';
import Form from '../components/Form';

const ContactForm = () => {
  return (
    <>
      <div className="contact">
        <h1>Contacto</h1>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
