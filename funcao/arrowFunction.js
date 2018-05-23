let dobro = function (a) {
	return 2 * a
}

dobro = (a) => {
	return 2 * a
}

dobro = a => 2 * a //return implícito (apenas quando tiver um só parametro)

console.log(dobro(4))