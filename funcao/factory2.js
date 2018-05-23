function criarProduto(nome, preco) {
	return{
		nome,
		preco,
		desconto: 0.1
	}
}

console.log(criarProduto('Ipad', 2000.00))
console.log(criarProduto('Notebook', 1555.00))