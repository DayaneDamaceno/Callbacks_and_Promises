/*
  instalar o modulo axios para consumir APIs
  swapi api do stars wars

  testar o
    for -> precisa de contador e indicar limitador
    for in -> não precisa incrementar o contador
    for of -> não precisa de contador
*/
import obterPessoas from './service.js';

async function main() {
  try {
    const { results } = await obterPessoas('a');
    const namesFor = [];
    const namesForIn = [];
    const namesForOf = [];

    console.time('for');

    for (let i = 0; i < results.length; i++) {
      const person = results[i].name;
      namesFor.push(person);
    }

    console.timeEnd('for');

    console.time('forin');

    for (const i in results) {
      const person = results[i].name;
      namesForIn.push(person);
    }

    console.timeEnd('forin');

    console.time('forof');

    for (const person of results) {
      namesForOf.push(person.name);
    }

    console.timeEnd('forof');

    console.log(namesFor);
    console.log(namesForIn);
    console.log(namesForOf);

  } catch (error) {
    console.error("Ops! erro interno", error);
  }
}

main();
