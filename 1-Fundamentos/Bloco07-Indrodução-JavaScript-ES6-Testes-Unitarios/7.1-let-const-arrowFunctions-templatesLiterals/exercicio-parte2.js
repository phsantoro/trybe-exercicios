// exercicio 1

const fatorial = (numero) => {
  let resultado = 1;

  for (let i = 2; i <= numero; i += 1) {
    resultado *= i;
  }

  return resultado;
};

console.log(fatorial(4));

// exercicio 2

const palavraLonga = (texto) => {
  let array = texto.split(" ");
  let maiorPalavra = 0;
  let resultado = "";

  for (const palavra of array) {
    if (palavra.length > maiorPalavra) {
      maiorPalavra = palavra.length;
      resultado = palavra;
    }
  }

  return resultado;
};

console.log(
  palavraLonga("Antonio foi no banheiro e não sabemos o que aconteceu")
);

//Exercicio 3 - está no index.html

// Exercicio 4
