
var d = new Date();
alert(d.getDate())
alert(d.getMonth())

var count;
for (count = 0; count <= 5; count++) {
console.log("estrutura for ", count)
}

/* var count = 0;
while (count <= 5) {
    console.log("estrutura while ", count)
    count++;
}
 */

var idade = prompt("qual sua idade")
if (idade >= 18) {
    alert("maior de idade ", idade)
} else {
    alert("menor de idade", idade)
}

/*aula 02
//lista de dicionarios
console.log("lista de dicionarios")
var frutas = [{ nome: "maça", cor: "verlhas" }, { nome: "uva", cor: "roxa" }]
console.log(frutas)
console.log(frutas[0].nome)

//dicionario
console.log("Dicionario")
var fruta = { nome: "maça", cor: "vermelha" };
console.log("fruta :", fruta.nome, "\ncor :", fruta.cor)



var lista = ["maçã", "pera", "laranja"];
lista.push("uva");//adicionar elemento

console.log(lista)
console.log(lista.toString())
console.log(lista.join(" - ")) //transforma e string e adiciona
*/

/*
aula01
var nome = "Magno Batista";
var idade = 27;
var idade2 = 10;
var frase = "Japao e o melhor time do mundo";
//alert("Nome :" + nome + " Idade: " + idade );
//alert (idade + idade2) ele somou pois ele intende que uma variavel inteiro
console.log(frase.replace("Japao", "Brasil"));
alert(frase.replace("Japao", "Brasil"))
//obs: o valor a ser subistituido tem que ser igual
console.log(frase.toUpperCase())
*/



