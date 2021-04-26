/*
  O filter por padrão retorna um boolean para informar
  se deve manter ou remover da lista.
*/
import obterPessoas from './service.js';

//criar meu próprio filter
Array.prototype.meuFilter = function(callback) {
  const arrayFiltrado = [];

  for (let index in this) {
    const item = this[index];
    const resultado = callback(item, index, this)

    if(!resultado) continue;
    arrayFiltrado.push(item);
  }

  return arrayFiltrado;
}

async function main() {
  try {

    const { results } = await obterPessoas('a');

    console.time('filter');
    const familyLars = results.filter(pessoa => pessoa.name.toLowerCase().indexOf('lars') !== -1);
    console.timeEnd('filter');

    console.time('meuFilter');
    const familyLarsMeuFilter = results.meuFilter(pessoa => pessoa.name.toLowerCase().indexOf('lars') !== -1);
    console.timeEnd('meuFilter');

    console.log(familyLars.map(pessoa => pessoa.name));
    console.log(familyLarsMeuFilter.map(pessoa => pessoa.name));

  } catch (error) {
    console.error("Ops erro interno", error);
  }
}

main();
