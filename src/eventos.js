/*
  Para trabalhar mos com evento no node podemos usar o módulo events,
  a principal diferença entre os eventos e as promises é que o evento
  ele fica observando uma ação desejada continuamente, já a promise executa
  apenas uma vez.

  .on(nome do evento, função a ser executada) -> serve para criar
  um observador de eventos

  .emit(nome do evento, evento) -> serve para emitir um evento
 */

import { EventEmitter } from 'events'

class MeuEvento extends EventEmitter {

}

const meuNovoEvento = new MeuEvento();

meuNovoEvento.on('user:clicou', (click) => {
  console.log('Um usuário clicou em:', click)
})

meuNovoEvento.emit('user:clicou', 'no console')
meuNovoEvento.emit('user:clicou', 'na barra')

//outro exemplo
const stdin = process.openStdin();
stdin.addListener('data', (value) => {
  console.log(`Você digitou: ${value.toString().trim()}`)
})
