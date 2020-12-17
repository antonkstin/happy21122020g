// block1 -------------------------
const delay = (ms) => {
  return new Promise((resolve) => {setTimeout(() => {resolve()}, ms)})
};

let counter = 0;  
const messages = [
  'Если ты это читаешь, значит тебе уже целых <br>22 года',
  'Я, мистер Субер, <br>от всей души поздравляю тебя',
  'С Днём рождения! <br>✌️',
  'Сегодня, я приготовил тебе маленький квест',
  'Готова ли ты его пройти?',


  'Фух...хорошо, что ты не нажала НЕТ))',
  'Ну ты даешь...тебе ни чуточки не интересно? <br>👎',

  'Чтобы начать искать сокровище введи пароль'
];

const block1 = document.querySelector('.block1');
const titleBLock = block1.querySelector('.block__title');
const buttonsBlock = block1.querySelector('.buttons');
const blockPrompt = block1.querySelector('.block__prompt');
const blockInputs = block1.querySelector('.block__inputs');

const animation = () => {
  titleBLock.style.opacity = 0;
  delay(500)
    .then(() => {
      titleBLock.innerHTML = messages[counter];
      titleBLock.style.opacity = 1;
      counter++;
    });
}

const handlerClickScreen = (event) => {
  if (counter===0) {
    blockPrompt.style.opacity = '0';
  }

  animation();

  if (counter>4 && counter<8) {
    block1.removeEventListener('click', handlerClickScreen);
  } else
  if (counter===4) {
    block1.removeEventListener('click', handlerClickScreen);
    delay(1500)
      .then(() => {buttonsBlock.style = 'opacity: 1; pointer-events: all';});
  }

  

  if (counter===10) {
    block1.removeEventListener('click', handlerClickScreen);

    delay(1000)
      .then(() => {blockInputs.style = 'opacity: 1; pointer-events: all';});
    
    delay(7000)
      .then(() => {
        blockPrompt.textContent = '(по возрастанию)';
        blockPrompt.style.opacity = '1';
      });
  }

};

block1.addEventListener('click', handlerClickScreen);



buttonsBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('buttons__button_yes')) {
    counter = 8;
    animation();
    delay(501)
      .then(() => {counter = 10; block1.addEventListener('click', handlerClickScreen)});    
  } else if (event.target.classList.contains('buttons__button_no')) {
    counter=9;
    animation();
    blockPrompt.textContent = '...или ты специально так нажала, чтобы узнать часть пароля?';
    delay(1500)
      .then(() => {blockPrompt.style.opacity = '1';});   
  }
  buttonsBlock.style.display = 'none';
});


blockInputs.addEventListener('input', (event) => {
  event.target.nextElementSibling.focus();
  console.log(event.target.nextElementSibling);

});
// block1 -------------------------