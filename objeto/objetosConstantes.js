//pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) //congela o objeto e mais nada pode ser atribuido ou alterado

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)