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