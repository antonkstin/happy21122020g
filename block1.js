// block1 -------------------------

const messages = {
  start: [
    'Если ты читаешь это сообщение,',
    'Значит тебе уже испонилось целых <br>22 года',
    'Я, мистер Субер, <br>от всей души поздравляю тебя',
    'С Днём рождения! <br>✌️',
    'Сегодня, я приготовил тебе маленький квест',
    'Готова ли ты его пройти?',
  ],

  choose: [
    'Фух...хорошо, что ты не нажала НЕТ))',
    'Ну ты даешь...тебе ни чуточки не интересно? <br>👎',
  ],

  end: [
    'Чтобы начать искать сокровище введи пароль'
  ]

}

let counter = 0; 

const block1 = document.querySelector('.block1');
const titleBLock = block1.querySelector('.block__title');
const buttonsBlock = block1.querySelector('.buttons');
const blockPrompt = block1.querySelector('.block__prompt');
const blockInputs = block1.querySelector('.block__inputs');
const inputs = blockInputs.querySelectorAll('.block__input');

const block2 = document.querySelector('.block2');







const handlerClickScreen = (event) => {

  if ( counter < messages.start.length ) {

    if ( counter === 0 ) {

      blockPrompt.style.opacity = '0';
  
    } 
  
    
    else if ( counter === messages.start.length - 1 ) {
  
      block1.removeEventListener('click', handlerClickScreen);
  
      setTimeout(() => {
        titleBLock.textContent.match('Ты') ? '' : buttonsBlock.style = 'opacity: 1; pointer-events: all';
      }, 1500);
  
    }

    titleBLock.style.opacity = 0;

    setTimeout(() => {
      titleBLock.innerHTML = messages.start[ counter ] || 'Ты самый быстрый кликер на Диком Западе <br> O_o <br> Ты не должна была попасть сюда! Уходи!';
      titleBLock.style.opacity = 1;
  
      counter++;
  
    }, 500);

  } else {

    titleBLock.style.opacity = 0;

    setTimeout(() => {
      titleBLock.innerHTML = messages.end[ 0 ];
      titleBLock.style.opacity = 1;  
    }, 500);



    block1.removeEventListener('click', handlerClickScreen);

    setTimeout(() => {

      blockInputs.style = 'opacity: 1; pointer-events: all';

      setTimeout(() => {
        blockPrompt.textContent = '(по возрастанию)';
        blockPrompt.style.opacity = '1';
      }, 10000);

    }, 1000);


  }

};



// Начало работы
block1.addEventListener('click', handlerClickScreen);

buttonsBlock.addEventListener('click', (event) => {
  if ( event.target.classList.contains('buttons__button_yes') ) {
    
    titleBLock.style.opacity = 0;

    setTimeout(() => {
      titleBLock.innerHTML = messages.choose[0];
      titleBLock.style.opacity = 1;

      block1.addEventListener('click', handlerClickScreen);
    }, 500);
    
  } else if ( event.target.classList.contains('buttons__button_no') ) {
    
    titleBLock.style.opacity = 0;

    setTimeout(() => {
      titleBLock.innerHTML = messages.choose[1];
      titleBLock.style.opacity = 1;

      blockPrompt.textContent = '...или ты специально так нажала, чтобы узнать часть пароля?';

      setTimeout(() => {
        blockPrompt.style.opacity = '1';
      }, 5000);

    }, 500);
   
  }

  buttonsBlock.style.display = 'none';

});


blockInputs.addEventListener('input', (event) => {

  if ( event.target !== inputs[2]) {

    event.target.nextElementSibling.focus();

  } else {

    if ( inputs[0].value == 1 && inputs[1].value == 2 && inputs[2].value == 5) {

      block1.style = 'opacity: 0; pointer-events: none';
      block2.style.display = 'opacity: 1; pointer-events: all';

    } else {

      blockPrompt.innerHTML = 'Неправильный пароль';
      blockPrompt.style = 'opacity: 1; color: red; font-weight: 400';

      setTimeout(() => {
        blockPrompt.innerHTML = 'Неправильный пароль<br>(пальчики оближешь)';
      }, 40000);

    }

  }

});
inputs.forEach((item) => {
  item.addEventListener('focus', () => {
    item.value = '';
  });
});

// block1 -------------------------