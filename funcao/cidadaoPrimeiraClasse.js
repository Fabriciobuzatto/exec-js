//Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//armazenar função em uma variavel
const fun2 = function () {} //funcao anonima

//Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parametro
function run(fun){
	fun()
}
run(function () {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b) {
	return function(c){
		console.log(a + b + c)
	}
}
soma(2, 3)(4) //chamando a proxima função 
//ou
const cincoMais = soma(2, 3)
cincoMais(4)