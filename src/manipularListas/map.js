/*
  Principal diferença entre o forEach e o map é que o
  forEach precisa de uma função externa já o map não pois ele retorna
  uma nova lista
*/

import obterPessoas from './service.js';

//criar meu próprio map
Array.prototype.meuMap = function(callback) {
  const arrayMapeado = [];

  for (const i in this) {
    const resultado = callback(this[i], i, this)
    arrayMapeado.push(resultado);
  }

  return arrayMapeado;
}

async function main() {
  try {

    const { results } = await obterPessoas('a');

    console.time('map');
    const names = results.map((pessoa) => pessoa.name);
    console.timeEnd('map');

    console.time('meuMap');
    const namesMeuMap = results.meuMap((pessoa, indice) => `[${indice}]${pessoa.name}`);
    console.timeEnd('meuMap');

    console.log(names);
    console.log(namesMeuMap);

  } catch (error) {
    console.error("Ops erro interno", error);
  }
}

main();


