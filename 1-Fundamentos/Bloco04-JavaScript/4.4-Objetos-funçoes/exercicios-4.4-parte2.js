//  1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


// OUTRA MANEIRA DE FAZER 
// function verificaPalindrome(word){
//     for(index in word){
//       if(word[index] != word[(word.length - 1) - index]){
//         return false;
//       }
//     }
//     return true;
//   }

  function varifPalindrome(text) {
      let inverter = text.split('').reverse().join('');
      if (inverter === text) {
          return true;
      } else {
          return false;
      }
  };

  console.log(varifPalindrome('ana'))

  // 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

  function maiorIndice(arrayNum) {
      let maiorIndice = 0;
      for (let indice in arrayNum) {
        if(arrayNum[maiorIndice] < arrayNum[indice]) {
          maiorIndice = indice;
        }
      }
      return maiorIndice;
  }

  console.log(maiorIndice([2, 3, 6, 7, 10, 1]));

  // 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

  function menorIndice (array) {
    let menorIndice = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[menorIndice] > array[i]) {
        menorIndice = i;
      }
    }
     return menorIndice;
  }
  console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));

  // 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  function maisCaracteres(nomes) {
    let maisCaracteres = nomes[0];
    for (let indice in nomes) {
      if(maisCaracteres.length < nomes[indice].length) {
        maisCaracteres = nomes[indice]
      }
    }
    return maisCaracteres;
  }
console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeat(array) {
  let countRepeat = 0;
  let countNumber = 0;
  let numberRepeat = 0;
  for ( let index in array) {
    let checkNumber = array[index];
    for (index2 in array){
      if ( checkNumber === array[index2]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeat) {
      countRepeat = countNumber;
      numberRepeat = index;
    }
    countNumber = 0
  }
  return array[numberRepeat]
}
console.log(repeat([2, 3, 2, 5, 8, 2, 3]));


// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(numeros) {
  let total = 0;
  for (let i = 0; i <= numeros; i += 1) {
    total += i;
  }
  return total
}
console.log(somatorio(5));

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verifica(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verifica('trybe', 'be'));