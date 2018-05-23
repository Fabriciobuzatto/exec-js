//novo recurso do ES2015

const pessoa = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

const {nome, idade} = pessoa //estraindo nome e idade de pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //atribuindo nome as variaveis
console.log(n ,i)

const {sobrenome, bemHumorada = true} = pessoa //undefined
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep}} = pessoa //extraindo de endereço dentro de pessoa
console.log(logradouro, numero, cep)



