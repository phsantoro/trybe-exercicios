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




const nota = 81;

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


// 8. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false .

const a = 3;
const b = 7;
const c = 10;

let par = false;

if ( a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  par = true; 
}

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const d = 2;
const e = 4;
const f = 6;

let impar = false;

if ( d % 2 === 0 || e % 2 === 0 || f % 2 === 0) {
  impar = true; 
}

//10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoProduto = 5;
const valorVenda = 10;

if ( custoProduto >= 0 && valorVenda >= 0) {
  const produtoComImposto = custoProduto * 1.2;
  const lucro = (valorVenda - produtoComImposto) * 1000;
} else {
  return "Erro, os valores devem ser positivos"
}

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let inss;
let ir;

const salario = 1800;

if ( salario <= 1556.94) {
  inss = salario * 0.08;
} else if ( salario <= 2594.92) {
  inss = salario * 0.09;
} else if ( salario <= 5189.82) {
  inss = salario * 0.11;
} else {
  inss = 570.88;
}

const salario2 = salario - inss;

if (salario2 <= 1903.98) {
  ir = 0;
} else if (salario2 <= 2826.65) {
  ir = (salario2 * 0.075) - 152.80;
} else if (salario2 <= 3751.05) {
  ir = (salario2 * 0.15) - 354.80;
} else if ( salario2 <= 4664.68) {
  ir = (salario2 * 0.225) - 636.13;
} else {
  ir = (salario2 * 0.275) - 869.36
}

console.log("Salário: " + (salario2 - ir));