/*
  reduce tem como principio reduzir uma lista em apenas um valor final
*/
import obterPessoas from './service.js';

//criar meu próprio reduce
Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

  for (let index = 0; index < this.length; index++) {
    valorFinal = callback(valorFinal, this[index], this)
  }

  return valorFinal;
}

async function main() {
  try {

    const { results } = await obterPessoas('a');
    const pesos = results.map(item => parseInt(item.height));

    const totalPeso = pesos.reduce((anterior, proxima) => anterior + proxima, 0);
    console.log(pesos, totalPeso);

    const totalPesoMeuReduce = pesos.meuReduce((anterior, proxima) => anterior + proxima, 0);
    console.log(pesos, totalPesoMeuReduce);

  } catch (error) {
    console.error("Ops erro interno", error);
  }
}

main();
