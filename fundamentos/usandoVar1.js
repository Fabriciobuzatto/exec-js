//quando vc define uma variavel dentro de uma funcao ela nao estara visivel fora da funcao

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)


//evitar criar variavel global - problemas ao sobescrever
//fuja do escopo global