/*
  Objetivo
  [x] - Obter usuário
  [x] - Obter telefone do usuário pelo id
  [x] - Obter endereço do usuário pelo id

  Criar 3 funções:
    1º busca o usuário no banco fictício e retorna ele
    2º busca o telefone no banco fictício e retorna ele
    3º busca o endereço no banco fictício e retorna ele

  Para criar uma sincronia nas funções criamos uma
  função callback que a tem como principio retornar o valor
  esperado ou um erro, essa função é passada por parâmetro na função
  e usada no retorno

  Desvantagem de usar esse modelo abaixo é esse aninhamento extenso e a
  tratativa de dados nada performatica
*/

function obterUser(callback) {
  setTimeout(() => {
    return callback(null, {
      nome: 'Dayane',
      idade: 18
    })
  }, 1000)
}

function obterTelephone(callback) {
  setTimeout(() => {
    return callback(null, {
      numero: '997703528',
      ddd: 11
    })
  }, 1000)
}

function obterEndereco(callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Maria de Fatima',
      numero: 362
    })
  }, 1000)
}

obterUser((err, user) => {
  if(err) return console.error("Algo deu errado em user");

  obterTelephone((err, telefone) => {
    if(err) return console.error("Algo deu errado em telefone");

    obterEndereco((err, endereco) => {
      if(err) return console.error("Algo deu errado em endereço");

      console.log(`
        Nome: ${user.nome}
        Telefone: (${telefone.ddd})${telefone.numero}
        Endereço: ${endereco.rua},${endereco.numero}
      `)
    })
  })
})
