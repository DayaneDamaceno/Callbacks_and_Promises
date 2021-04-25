/*
  Objetivo
  [x] - Obter usuário
  [x] - Obter telefone do usuário
  [x] - Obter endereço do usuário

  Como analisado anteriormente essa resolução das promises é muito verbosa
  para isso podemos usar o async await.

  Quando temos que resolver promises que os resultados entre
  elas são independentes podemos usar o Promise.all([])
*/
import { promisify } from 'util';

const obterEnderecoPromise = promisify(obterEndereco);

function obterUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      //exemplo de uso do reject
      // return reject(new Error("Puts deu erro man"));

      return resolve({
        nome: 'Dayane',
        idade: 18
      })
    }, 1000)
  })
}

function obterTelephone() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        numero: '997703528',
        ddd: 11
      })
    }, 1000)
  })
}

function obterEndereco(callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Maria de Fatima',
      numero: 362
    })
  }, 1000)
}

async function main() {
  try {

    const user = await obterUser();
    const [ telefone, endereco ] = await Promise.all([
      obterTelephone(),
      obterEnderecoPromise()
    ])

    console.log(`
      Nome: ${user.nome}
      Telefone: (${telefone.ddd})${telefone.numero}
      Endereço: ${endereco.rua},${endereco.numero}
    `)

  } catch (error) {
    console.error("Erro", error)
  }
}
main();

