// 1 ----------------------------------------
let frase : string = prompt("Digite uma palavra ou frase:")
const arrVogais : string[] = "aeiou".split('');

function ContaVogais(frase : string): number{
    let contadorVogais: number = 0;
    let arrFrase: string[] = frase.split('');
    arrVogais.forEach(vogais => {
        arrFrase.forEach(letra => {
            if(vogais == letra){
                contadorVogais++;
            }
        })
    });
    return contadorVogais;
}

console.log("Frase/Palavra: " + frase + " | Qtd Vogais: "+ ContaVogais(frase));

// 2 -----------------------------------------

let palavra: string = prompt("Digite uma palavra: ")

function RetornaMeio(palavra : string): string{
    let contador: number = 0;
    let meio: string = ''
    let arrPalavra = palavra.split('');
    if(arrPalavra.length % 2 == 0){
        contador = arrPalavra.length / 2;
        meio = arrPalavra[contador - 1] + arrPalavra[contador];
    }else{
        contador = Math.floor(arrPalavra.length / 2)
        meio = arrPalavra[contador]
    }
    return meio;
}

console.log("Palavra: " + palavra + " | Meio: "+ RetornaMeio(palavra));

// 3 ------------------------------------------

let numero: number = parseInt(prompt("Digite um numero:"))

function MaiorNumero(numero: number): number{
    let sNumero: string = numero.toString()
    let arrNumero: string[] = sNumero.split('')
    let sMaiorNumero: string = ''
    let maiorNumero: number = 0

    arrNumero.sort((a,b) =>{
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
    })

    arrNumero.forEach(numero =>{
        sMaiorNumero = sMaiorNumero + numero
        maiorNumero = parseInt(sMaiorNumero)
    })

    return maiorNumero
}

console.log("Numero Digitado:" + numero + " | Maior Numero Possivel: " + MaiorNumero(numero))