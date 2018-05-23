function getInteiroAleatorio(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

let opcao = -1

//da a opcao de ao menos uma etapa do laço ser concluida antes de finalizar

do{
	opcao = getInteiroAleatorio(-1, 10)
	console.log(`Opção Escolhida foi ${opcao}.`)
}while (opcao != -1)

console.log('Até a próxima!')