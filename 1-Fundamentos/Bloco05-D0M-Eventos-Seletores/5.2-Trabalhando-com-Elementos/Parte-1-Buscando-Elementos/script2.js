// Acesse o elemento elementoOndeVoceEsta .

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'Green';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Seção do Primeiro filho do filho';

// Acesse o primeiroFilho a partir de pai .

const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

const primeiroFilhoNovo = elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

const textoAtenção = elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .

const terceiroFilhoNovo = pai.lastElementChild.previousElementSibling;


// 1. Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);