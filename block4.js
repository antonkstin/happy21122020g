(function() {

  const messages = [
    'Мне так сильно нравится всяко ползать и расследовать',
    'Мы с тобой - отличная команда!',
    'Ты - Шерлок Холмс, а я Доктор Ватсон, тока котик))',
    '*напряженным голосом* И последнее место преступления находится у...',
    'Какой-то палки и церкви?',
    'Шерлок, разберись:',
  ];

  const block4 = document.querySelector('.block4');
  const titleBLock = block4.querySelector('.block__title');
  const blockPrompt = block4.querySelector('.block__prompt');
  const blockInputs = block4.querySelector('.block__inputs');
  const blockImage = block4.querySelector('.block__image');
  const inputs = blockInputs.querySelectorAll('.block__input');

  const block5 = document.querySelector('.block5');

  let counter = 0; 


  const handlerClickScreen = (event) => {

    if ( counter < messages.length ) { 
  
      titleBLock.style.opacity = 0;
  
      setTimeout(() => {
        titleBLock.innerHTML = messages[ counter ] || 'Мика-земляника торопыжка че поделать';
        titleBLock.style.opacity = 1;
    
        counter++;
    
      }, 500);
  
    } else {
  
      block4.removeEventListener('click', handlerClickScreen);
  
      setTimeout(() => {
  
        if ( !titleBLock.textContent.match('торопыжка') ) {
          titleBLock.textContent = '';
          blockInputs.style = 'opacity: 1; pointer-events: all';
          blockImage.style.opacity = 1;
        }
  
      }, 1000);
  
    }
  
  };




  block4.addEventListener('click', handlerClickScreen);

  blockInputs.addEventListener('input', (event) => {

    if ( event.target !== inputs[2]) {
  
      event.target.nextElementSibling.focus();
  
    } else {
  
      if ( inputs[0].value == 4 && inputs[1].value == 6 && inputs[2].value == 5) {
  
        block4.style = 'display: none';
        block5.style = 'opacity: 1; pointer-events: all; position: static';
  
      } else {
  
        blockPrompt.innerHTML = 'МЯУ МЯУ МЯУ *что-то не сходится*';
        blockPrompt.style = 'opacity: 1; color: red; font-weight: 400';
  
        setTimeout(() => {
  
          blockPrompt.innerHTML = 'Ночь, улица, ..., аптека';
  
        }, 80000);
  
      }
  
    }
  
  });
  inputs.forEach((item) => {
    item.addEventListener('focus', () => {
      item.value = '';
    });
  });


})();