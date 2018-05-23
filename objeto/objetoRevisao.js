//Colecao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca produto'] = 'Generica'
produto.preco  = 220

console.log(produto)
delete produto.preco
delete produto['marca produto']
console.log(produto)

const carro = {
	modelo: 'A4',
	valor: 89000,
	proprietario: {
		nome: 'Raul',
		idade: 56,
		endereco: {
			logradouro: 'Rua ABC',
			numero: 123
		},
		condutores: [{
			nome: 'Junior',
			idade: 19
		},{
			nome: 'Ana',
			idade: 42
		}],
		calcularValorSeguro: function () {
			// body...
		}
	}
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida Brasil'
console.log(carro)