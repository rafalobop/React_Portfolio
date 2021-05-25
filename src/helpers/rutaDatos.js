import axios from 'axios';

export const getDatos = async () => {
  const res = await axios(
    'http://my-json-server.typicode.com/rafalobop/react_portfolio/accordeon'
  );
  const { data } = res;
  return data;
};
