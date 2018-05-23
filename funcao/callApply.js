//Duas maneiras de chamar uma função

function getPreco(imposto = 0, moeda = 'R$' ) {
	return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
	nome: 'Notebook',
	preco: 4589,
	desc: 0.15,
	getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(produto.call(carro, 0.17, '$')) //primeira opcao é o elemtno e depois os parametros
console.log(produto.apply(carro, [0.17, '$']))//dentro de um array
