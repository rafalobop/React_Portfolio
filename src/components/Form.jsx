import React from 'react';

const Form = () => {
  return (
    <>
      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" placeholder="Ingresa tu nombre" />
      <label htmlFor="email">Mail</label>
      <input type="email" id="email" placeholder="Ingresa tu mail" />
      <label htmlFor="phoneNumber">Telefono</label>
      <input type="phone" id="phoneNumber" placeholder="Ingresa tu telefono" />
      <label htmlFor="textarea">Mensaje</label>
      <textarea
        name="textarea"
        id="textarea"
        placeholder="Ingresa tu mensaje"
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit">Enviar</button>
    </>
  );
};

export default Form;
