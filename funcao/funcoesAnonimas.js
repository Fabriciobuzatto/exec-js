const soma = function (x, y) {
	return x + y
}

const imprimirResultado = function (a, b, operacao = soma){ //colocou a funcao dentro de uma variavel
	console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)


imprimirResultado(3, 4, (x, y) => x * y)