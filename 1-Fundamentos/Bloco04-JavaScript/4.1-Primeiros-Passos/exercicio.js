// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 10;
const b = 15;

let soma = a + b;
let subt = a - b;
let mult = a * b;
let divide = a / b;
let modulo = a % b;

console.log(soma);
console.log(subt);
console.log(mult);
console.log(divide);
console.log(modulo);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const numberOne = 50;
const numberTwo = 62;

if (numberOne > numberTwo) {
  console.log("O maior número é: ", numberOne);
} else {
  console.log("O maior número é: ", numberTwo);
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const valueOne = 10;
const valueTwo = 20;
const valueThree = 30;

if (valueOne > valueTwo && valueOne > valueThree) {
  console.log("O maior número é: ", valueOne);
} else if (valueTwo > valueOne && valueTwo > valueThree) {
  console.log("O maior número é: ", valueTwo);
} else {
  console.log("O maior número é: ", valueThree);
}

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const number = -50;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 50;
const angulo2 = 60;
const angulo3 = 70;

let triangulo = angulo1 + angulo2 + angulo3;

if (triangulo === 180) {
  console.log(true);
} else {
  console.log(false);
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peça = "Rei";

switch (peça) {
  case "Peão":
    console.log("Anda uma casa para frente e come outra peça na diagonal");
    break;

  case "Torre":
    console.log("Se movimenta para a horizontal e vertical");
    break;

  case "Cavalo":
    console.log("Se movimenta em L");
    break;

  case "Bispo":
    console.log("Se movimenta nas diagonais");
    break;

  case "Rainha":
    console.log("Se movimenta na diagonal, vertical e horizontal");
    break;

  case "Rei":
    console.log(
      "Se movimenta na diagonal, vertical e horizontal, porém apenas uma casa"
    );
    break;

  default:
    console.log("Peça inválida");
    break;
}


// // 7.Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.




const nota = 76;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}