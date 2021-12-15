// Refatorando exercicio 1 do 4.1

function soma(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mult(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  function mod(a, b) {
    return a % b;
  }

  // REfatorando exercicio 2 do 4.1

  function maiorNum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne + ' é maior que ' + numberTwo;
    } else {
      return numberTwo + ' é maior que ' + numberOne;
    }
  }

  // Refatorando exercicio 3 do 4.1

  function maiorDeTres(firstNumb, secondNumb, thirdNumb) {
    if (firstNumb > secondNumb && firstNumb > thirdNumb) {
      return 'O maior número é: ' + firstNumb;
    } else if (secondNumb > firstNumb && secondNumb > thirdNumb) {
      return 'O maior número é: ' + secondNumb;
    } else {
      return 'O maior número é: ' + thirdNumb;
    }
  }

  // Refatorando exercicio 4 do 4.1

  function positiveNegative(number) {
    if (number > 0) {
      return 'positive';
    } else if (number < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }

  // Refatorando exercicio 5 do 4.1

  function triangulo(anguloA, anguloB, anguloC) {
    let somatorio = anguloA + anguloB + anguloC;
    let verificacaoPositivo = anguloA > 0 && anguloB > 0 && anguloC > 0;
  
    if (verificacaoPositivo) {
      if (somatorio === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }