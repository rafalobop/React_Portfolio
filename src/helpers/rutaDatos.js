import axios from 'axios';

export const getDatos = async () => {
  const res = await axios(
    'https://my-json-server.typicode.com/rafalobop/react_portfolio/db'
  );
  const { data } = res;
  return data.accordeon;
};

export const getProyect = async () => {
  const res = await axios(
    'https://my-json-server.typicode.com/rafalobop/react_portfolio/db'
  );
  const { data } = res;
  console.log(data.proyectos);
  return data.proyectos;
};
