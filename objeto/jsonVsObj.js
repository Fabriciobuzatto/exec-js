const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} } //json nao suporta funcoes
console.log(JSON.stringify(obj)) //conversao de objeto em json

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //conversao de json para objeto
console.log(JSON.parse('{"a":1,"b": "string","c": true, "d": {}, "e": []}'))
