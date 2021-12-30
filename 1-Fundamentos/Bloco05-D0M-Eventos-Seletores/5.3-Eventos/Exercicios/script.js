function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');
      if (day === 24 || day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem)
      } else if ( day === 4 || day === 11 || day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if ( day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }
    }
  }

  createDaysOfTheMonth();

  //Exercicio 2

  function criarBotao(nome) {
    let localBotao = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');

    novoBotao.innerHTML = nome;
    novoBotao.id = 'btn-holiday'
    localBotao.appendChild(novoBotao);
  }
  criarBotao('Feriados');

  //Exercicio 3

  function colorirFeriado() {
    let botaoFeriado = document.querySelector('#btn-holiday');
    let feriados = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238, 238, 238)';
    let novaCor = 'white';

    botaoFeriado.addEventListener('click', function() {
      for (let index = 0; index < feriados.length; index += 1) {
        if ( feriados[index].style.backgroundColor === novaCor) {
          feriados[index].style.backgroundColor = backgroundColor;
        } else {
          feriados[index].style.backgroundColor = novaCor;
        }
      }
    })
  }
  colorirFeriado();