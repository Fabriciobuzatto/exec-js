const escola = "Cod3r"

console.log(escola.charAt(4)) //peda o indice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //o codigo do caractere na tabela unicode
console.log(escola.indexOf('3')) //o inverso

console.log(escola.substring(1)) //indice inicial
console.log(escola.substring(0, 3)) //indice inicial e o final

console.log('Escola'.concat(escola).concat("!")) //concatenou
console.log(escola.replace(3, 'e')) //substituiu

console.log('Ana,Maria,Pedro'.split(',')) //transforma em array