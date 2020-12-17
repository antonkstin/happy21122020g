const messages = [
  'А теперь к делу',
  'Сейчас, я покажу тебе, карту, которую нашел в кладовке',
  'Надеюсь, что ты знаешь, где это место...',
  'Скорее приди туда и найди сокровище'
];

const block2 = document.querySelector('.block2');
const titleBLock = block2.querySelector('.block__title');
const blockPrompt = block2.querySelector('.block__prompt');
const blockInputs = block2.querySelector('.block__inputs');
const blockImage = block2.querySelector('.block__image');
const inputs = blockInputs.querySelectorAll('.block__input');

const block3 = document.querySelector('.block3');

let counter = 0; 




const handlerClickScreen = (event) => {

  if ( counter < messages.length ) { 

    titleBLock.style.opacity = 0;

    setTimeout(() => {
      titleBLock.innerHTML = messages[ counter ] || 'Ну я же говорил тебе не кликать так быстро( Теперь придётся перезагружаться. Надеюсь ты запомнила первый пароль';
      titleBLock.style.opacity = 1;
  
      counter++;
  
    }, 500);

  } else {

    block2.removeEventListener('click', handlerClickScreen);

    setTimeout(() => {

      if ( !titleBLock.textContent.match('перезагружаться') ) {
        titleBLock.textContent = '';
        blockInputs.style = 'opacity: 1; pointer-events: all';
        blockImage.style.opacity = 1;
      }

    }, 1000);


  }

};


block2.addEventListener('click', handlerClickScreen);

blockInputs.addEventListener('input', (event) => {

  if ( event.target !== inputs[2]) {

    event.target.nextElementSibling.focus();

  } else {

    if ( inputs[0].value == 9 && inputs[1].value == 1 && inputs[2].value == 1) {

      block2.style = 'display: none';
      block3.style = 'opacity: 1; pointer-events: all; position: static';

    } else {

      blockPrompt.innerHTML = 'А ты уверена, что это то место?';
      blockPrompt.style = 'opacity: 1; color: red; font-weight: 400';

      setTimeout(() => {

        blockPrompt.innerHTML = 'Смотри внимательнее.. Чую, что ты близка';

      }, 5000);

    }

  }

});
inputs.forEach((item) => {
  item.addEventListener('focus', () => {
    item.value = '';
  });
});