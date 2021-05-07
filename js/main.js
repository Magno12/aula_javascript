//mini curso introdução ao java script
//digital innovation
//modulo 02 fim 

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>")  //injetando text html
    //alert("Obrigado por clicar")
};

function redirecionar() {
    //window.open("https://google.com"); //abrir nova aba
    window.location.href = "https://google.com"; // abrir na mesma aba
}

function troca() {
    //alert("trocar texto")
    document.getElementById("mousemove").innerHTML = "Obrigado por passa o mouse"
}

function volta() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}
//outra maneira
function trocar(element) {
    element.innerHTML = "Esta segunda maneira de trocar text obrigado por passa o mouse"
}

function voltar(element) {
   element.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada")
}

function funcaoChange(element){
    console.log("funcao Change valor : ", element.value)
}
/*
//modulo 02 parti 01
function soma(n1, n2) {
    return n1 + n2;
};

function validadeIdade(idade) {
    var validar
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar
}

var idade = prompt("qual a sua idade");
console.log("validade", validadeIdade(idade));
 */

/* function soma(n1, n2) {
    return n1 + n2;
};

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
};

//modulo01

alert(soma(5, 10));
alert(setReplace("vai Japão", "Japão", "Brasil"));
 */

/*
var d = new Date();
alert(d.getDate())
alert(d.getMonth())

var count;
for (count = 0; count <= 5; count++) {
console.log("estrutura for ", count)
}
 */
/* var count = 0;
while (count <= 5) {
    console.log("estrutura while ", count)
    count++;
}
 */

/* var idade = prompt("qual sua idade")
if (idade >= 18) {
    alert("maior de idade ", idade)
} else {
    alert("menor de idade", idade)
}
 */
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



