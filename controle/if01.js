function soBoaNoticia(nota) {
	if (nota >=7) {
		console.log('Aprovado com ' + nota)
	}
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
	if (valor) {
		console.log('É verdade... ' + valor)				
	}
}

//o Javascript considera o if como verdadeiro ou falso
// seForVerdadeEuFalo()
// seForVerdadeEuFalo(null)
// seForVerdadeEuFalo(undefined)
// seForVerdadeEuFalo(Nan)
// seForVerdadeEuFalo('')
seForVerdadeEuFalo('teste')
