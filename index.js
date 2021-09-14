let listaPecas=[]
let nomePecas="Peca Teste"
let pesoPeca=300
let podecadastrar=true

if (pesoPeca<100){
    console.log("Não há possibilidade de cadastrar!")
    podecadastrar=false
}

if (listaPecas.length>10){
 consolole.log('Limite de pecas atingido!')
 podecadastrar=false
 }

if (nomePecas.length<3){
    console.log("Tamanho de letras inferior ao permitido")
    podecadastrar=false
}

if (podeCadastrar){
    listaPecas.push(nomePeca)
    console.log("cadastramento efetuado com suceso")
} else {
    console.log("Houve problemas para cadastrar a peca")
}

console.log("Listando as pecas cadastradas.")
for (let i=0;i<listaPecas.length;i++){
    console.log(listaPecas[i])
}

