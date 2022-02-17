// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const newEmployees = (infos) => {
//   const employees = {
//     id1: infos("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: infos("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: infos("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };

// const infos = (nomeCompleto) => {
//   let emailGerado = nomeCompleto.toLowerCase().split(" ").join("_");
//   let info = {
//     name: nomeCompleto,
//     email: `${emailGerado}@trybe.com`,
//   };
//   return info;
// };

// console.log(newEmployees(infos));

// // 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou")

// const verify = (numberBet, numberAleatory) => numberBet === numberAleatory;

// const checkRaffle = (numberBet, callback) => {
//   let numberAleatory = Math.floor(Math.random() * 5 + 1);
//   if (callback(numberBet, numberAleatory) === true) {
//     return `Parabéns você ganhou com o número ${numberBet}`;
//   }
//   return `Tente Novamente, o numero sorteado foi ${numberAleatory}`;
// };

// console.log(checkRaffle(3, verify));

// //3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// //Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
// const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

// const comparador = (respostasCertas, respostasAluno) => {
//   if (respostasCertas === respostasAluno) {
//     return 1;
//   }
//   if (respostasAluno === "N.A") {
//     return 0;
//   }
//   return -0.5;
// };

// const contadorPontos = (respostasCertas, respostasAluno, callback) => {
//   let contador = 0;
//   for (let index = 0; index < respostasCertas.length; index += 1) {
//     contador += callback(respostasCertas[index], respostasAluno[index]);
//   }
//   return `O aluno fez ${contador} pontos.`
// };

// console.log(contadorPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparador));

// BONUS
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

// const battleMembers = { mage, warrior, dragon };


const dragonAtk = (dragon) => {
  let minDmg = 15;
  let damageDragon = Math.floor((Math.random() * (dragon.strength - minDmg) +  minDmg));
  return damageDragon;
}
console.log(dragonAtk(dragon));


const warriorAtk = (warrior) => {
  let minDmg = warrior.strength;
  let maxDmg = minDmg * warrior.weaponDmg;
  let damageWarrior = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return damageWarrior;
}

console.log(warriorAtk(warrior));