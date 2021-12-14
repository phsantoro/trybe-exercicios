// 1. crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for(let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
 console.log(fatorial);

 // 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

 let word = 'tryber';
 let reverter = '';

 for (let i = 0; i < word.length; i += 1) {
     reverter += word[word.length - 1 - i];
 }
 console.log(reverter)


 // Solução vista no gabarito

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

// 3. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i += 1){
  if ( array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i] 
  }
}

for(let i2 = 0; i2 < array.length; i2 += 1) {
  if(array[i2].length < menorPalavra.length) {
    menorPalavra = array[i2]
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);

// 4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorNumeroPrimo = 0;

for (let index = 0; index <= 50; index += 1) {
  let primo = true;
  for (let index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorNumeroPrimo = index;
  }
}

console.log(maiorNumeroPrimo);