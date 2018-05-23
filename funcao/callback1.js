//callback = chamar de volta
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) { //primeira parametro vai ser sempre o nome e o segundo vai ser o indice
	console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)