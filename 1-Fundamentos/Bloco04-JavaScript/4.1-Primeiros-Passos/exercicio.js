// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 10;
const b = 15;

let soma = a + b;
let subt = a - b;
let mult = a * b;
let divide = a / b;
let modulo = a % b;

console.log(soma)
console.log(subt)
console.log(mult)
console.log(divide)
console.log(modulo)


// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const numberOne = 50;
const numberTwo = 62;

if (numberOne > numberTwo ) {
    console.log("O maior número é: ", numberOne)
} else {
    console.log("O maior número é: ", numberTwo)
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const valueOne = 10;
const valueTwo = 20;
const valueThree = 30;

if ( valueOne > valueTwo && valueOne > valueThree) {
    console.log("O maior número é: ", valueOne)
} else if (valueTwo > valueOne && valueTwo > valueThree) {
    console.log("O maior número é: ", valueTwo)
} else {
    console.log("O maior número é: ", valueThree)
}


// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const number = -50

if (number > 0) {
    console.log("positive")
} else if (number < 0 ) {
    console.log("negative")
} else {
    console.log("zero")
}