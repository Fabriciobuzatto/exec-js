
//arguments é um array interno de uma função
function soma() {
	let soma = 0
	for (i in arguments) {
		soma += arguments[i] //indice array
	}
	return soma
}
console.log(soma())
console.log(soma(30))