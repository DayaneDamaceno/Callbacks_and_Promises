/*
  Objetivo
  [x] - Obter usuário
  [x] - Obter telefone do usuário pelo id
  [x] - Obter endereço do usuário pelo id

  O uso de promise funciona da seguinte forma, quando precisamos
  realizar uma função assíncrona transformamos ela em uma promise retornando uma
  new Promise(), promise recebe uma função como parâmetro e essa função
  também recebe mais dois parâmetros sendo eles o resolve e o reject
    resolve -> chamada quando o que vc quiser executar der certo
    reject -> chamada quando der algum erro

  Agora para manipularmos essa função usamos o .then e o .catch, onde
  then capita os resultados passados para resolve dentro da promise, e
  catch capita os erros passados no reject

  Vale se atentar que o uso encadeado de .then acaba retornando
  sempre o resultado do then anterior a ele, então se precisamos de um valor
  sendo repassado precisamos tratar esse retorno


  Podemos também transformar uma callback em uma promise
  com um módulo nativo do node o promisify do util
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

const user = obterUser();

user
  .then((resUser) => {
    return obterTelephone()
      .then((resTelephone) => {
        return {
          ...resUser,
          telefone: resTelephone
        }
      })
  })
  .then((resUser) => {
    return obterEnderecoPromise()
      .then((resEndereco) => {
        return {
          ...resUser,
          endereco: resEndereco
        }
      })
  })
  .then((resUser) => console.log(resUser))
  .catch((err) => console.error("Erro:", err));
