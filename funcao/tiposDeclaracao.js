console.log(soma(5, 6))

//function declaration - nesse tipo de funcao ela é carregada antes de compilar o código
function soma(x, y) {
	return x + y
}

//function expression
const sub = function(x, y) {
	return x - y
}

//named function expression
const mult = function mult(x, y) {
	return x * y
}