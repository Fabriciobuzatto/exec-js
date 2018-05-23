const imprimirResultado = function(nota) {
	switch(Math.floor(nota)){ //arredondar para baixo
		case 10:
		case 9:
			console.log('Quadro de honra')
			break //colocar break, se nao todos os comportamentos abaixo serao executados
		case 8: case 7:
			console.log('Aprovado')
			break
		case 6: case 5: case 4:
			console.log('Recuperação')
			break
		case 3: case 2: case 1: case 0:
			console.log('Reprovado')
			break
		default:
			console.log('Nota Inválida')
	}
}

imprimirResultado(6.2222)