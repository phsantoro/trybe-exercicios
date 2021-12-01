// EXEMPLO 1 - VARIÁVEIS

const myName = "Philippe";
const birthCity = "Volta Redonda";
let birthYear = 1995;

birthYear = 2030;
// birthCity = "Rio de Janeiro"  Dá erro pois a variável é uma constante

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//EXEMPLO 2 - TIPOS PRIMITIVOS, TIPAGEM DINÃMICA E OPERAÇÕES ARITMÉTICAS

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: "Ana",
  lastName: "Santos",
};
const patientEmail = "ana@email.com";
patientId = "50";

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

//Operação aritmética

const base = 5;
const height = 8;
const area = base * height;
const perimeter = 2 * base + 2 * height;

console.log(area);
console.log(perimeter);

//CONDIÇÕES IF E ELSE

const nota = 50;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

//OPERADORES LOGICOS
//AND - E

const currentHour = 15;
let message = [];

if (currentHour >= 22) {
    message.push("Não deveríamos comer nada, é hora de dormir");
} 
    else if (currentHour >= 18 && currentHour < 22) {
    message.push("Rango da noite, vamos jantar :D");
} 
    else if (currentHour >= 14 && currentHour < 18) {
    message.push("Vamos fazer um bolo pro café da tarde?");
} 
    else if (currentHour >= 11 && currentHour < 14) {
    message.push("Hora do almoço!!!");
} 
    else if (currentHour >= 4 && currentHour < 11) {
    message.push("Hmmm, cheiro de café recém passado");
}

console.log(message);


// Operador OR - ou

let weekDay = 'quarta-feira'

if ( weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}   else if ( weekDay === "Sábado" || weekDay === "Domingo" ) {
    console.log( "FINALMENTE, descanso merecido UwU" )
}


