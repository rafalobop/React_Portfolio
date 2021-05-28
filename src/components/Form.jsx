import React, { useState } from 'react';
import swal from '@sweetalert/with-react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_x67fv4h',
        'template_9bp5zn9',
        e.target,
        'user_L2jJ3AiSTf4oiICCKVY2b'
      )
      .then(
        (result) => {
          if (result) {
            swal({
              title: 'Bien!',
              text: 'Mensaje enviado',
              icon: 'success',
              button: 'Cerrar',
            });

            e.target.reset();
          }
        },

        (error) => {
          if (error) {
            swal({
              title: 'Ups!',
              text: 'Hubo un problema al enviar el e-mail. Por favor, Intenta de nuevo',
              icon: 'error',
              button: 'Reintentar',
            });
          }
        }
      );
  };

  return (
    <>
      <form className="form" id="contactForm" onSubmit={sendEmail}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingresa tu nombre"
          required
          onChange={handleChange}
        />
        <label htmlFor="email">Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu mail"
          required
          onChange={handleChange}
        />
        <label htmlFor="phoneNumber">Telefono</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Ingresa tu telefono"
          required
          onChange={handleChange}
        />
        <label htmlFor="textarea">Mensaje</label>
        <textarea
          name="message"
          id="message"
          placeholder="Ingresa tu mensaje"
          cols="30"
          rows="10"
          required
          onChange={handleChange}
        ></textarea>
        <button className="formButton" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;

/* template id: template_qw3ih3q*/
