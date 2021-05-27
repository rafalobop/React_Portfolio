import React from 'react';
import '../css/form.css';
import Form from '../components/Form';

const ContactForm = () => {
  return (
    <>
      <div className="contact">
        <div className="form-container">
          <h1>Contacto</h1>
          <form className="form">
            <Form />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
