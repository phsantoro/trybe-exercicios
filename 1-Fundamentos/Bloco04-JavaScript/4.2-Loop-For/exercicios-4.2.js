// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for ( let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let soma = 0;

// for ( let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index]
// }
// console.log(soma);

// // Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let media = soma / numbers.length;
// console.log(media);

// // Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// if ( media > 20 ) {
//   console.log('valor maior que 20')
// } else {
//   console.log('valor menor que 20');
// }

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maiorNumero = numbers[0];

// for ( let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > maiorNumero) {
//     maiorNumero = numbers[i]
//   }
// }
// console.log(maiorNumero);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let impar = 0;

// for ( let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0 ) {
//     impar += 1; 
//   } 
// }

// if ( impar === 0 ) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(impar);
// }

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let menor = numbers[0];

//  for ( let index = 0; index < numbers.length; index += 1) {
//    if ( numbers[index] < menor) {
//      menor = numbers[index]
//    }
//  }
//  console.log(menor);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let arrayNumber = [];

// for ( let i = 1; i <= 25; i += 1) {
//   arrayNumber.push(i)
// }
//console.log(arrayNumber);


// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// for (let index = 0; index < arrayNumber.length; index += 1) {
//   console.log(arrayNumber[index] / 2);
// }