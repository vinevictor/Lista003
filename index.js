// 1 ----------------------------------------
var frase = prompt("Digite uma palavra ou frase:");
var arrVogais = "aeiou".split('');
function ContaVogais(frase) {
    var contadorVogais = 0;
    var arrFrase = frase.split('');
    arrVogais.forEach(function (vogais) {
        arrFrase.forEach(function (letra) {
            if (vogais == letra) {
                contadorVogais++;
            }
        });
    });
    return contadorVogais;
}
console.log("Frase/Palavra: " + frase + " | Qtd Vogais: " + ContaVogais(frase));
// 2 -----------------------------------------
var palavra = prompt("Digite uma palavra: ");
function RetornaMeio(palavra) {
    var contador = 0;
    var meio = '';
    var arrPalavra = palavra.split('');
    if (arrPalavra.length % 2 == 0) {
        contador = arrPalavra.length / 2;
        meio = arrPalavra[contador - 1] + arrPalavra[contador];
    }
    else {
        contador = Math.floor(arrPalavra.length / 2);
        console.log(contador);
        meio = arrPalavra[contador];
    }
    return meio;
}
console.log("Palavra: " + palavra + " | Meio: " + RetornaMeio(palavra));
// 3 ------------------------------------------
var numero = parseInt(prompt("Digite um numero:"));
function MaiorNumero(numero) {
    var sNumero = numero.toString();
    var arrNumero = sNumero.split('');
    var sMaiorNumero = '';
    var maiorNumero = 0;
    arrNumero.sort(function (a, b) {
        if (a < b)
            return 1;
        if (a > b)
            return -1;
        return 0;
    });
    arrNumero.forEach(function (numero) {
        sMaiorNumero = sMaiorNumero + numero;
        maiorNumero = parseInt(sMaiorNumero);
    });
    return maiorNumero;
}
console.log("Numero Digitado:" + numero + " | Maior Numero Possivel: " + MaiorNumero(numero));
