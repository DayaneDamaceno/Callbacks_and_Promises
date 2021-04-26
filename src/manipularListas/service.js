import axios from 'axios';

const urlPrefix = 'https://swapi.dev/api/people';

export default async function obterPessoas(nome){
  const url = `${urlPrefix}/?search=${nome}&format=json`;
  const { data } = await axios.get(url);
  return data;
}

// export {
//   obterPessoas
// }
