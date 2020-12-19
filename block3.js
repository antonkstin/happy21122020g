(function() {

  const messages = {
    start: [
      'Давай поглядим, что мы нашли',
      'Да это еще одна часть карты',
      'Ну эти котики дают',
      'Хотят, чтобы я похудел что ли и прошел дневную норму шагов?))',
      'Ну ладно. Че уж поделать))',
      'Но перед тем как мы пойдем дальше',
      'Скажу, что вот я видел как ты выглядишь',
      'Такая касииивая и миилая и неежная',
      'А я не представился. Ты только меня как-то вообразила',
      'Так вот представляю вашему внимаю котика Мурзика:',
    ],

    middle: [
      '',
      'Правда красивчик?))',
      'Ну ладно, ладно, это не я. Это же кот из Шрека',
      'Я использую эту фотку для аватарки вКОТакте',
      'Кошечкам нравится))',
      'На самом деле я выгляжу вот так:',
    ],

    end: [
      '',
      'Ну вот, теперь ты меня увидела и мы окончательно познакомились',
      'А теперь, в путь!',
    ],
  };


  const block3 = document.querySelector('.block3');
  const titleBLock = block3.querySelector('.block__title');
  const blockPrompt = block3.querySelector('.block__prompt');
  const blockInputs = block3.querySelector('.block__inputs');
  const blockImage = block3.querySelector('.block__image');
  const inputs = blockInputs.querySelectorAll('.block__input');

  const fakeAva = block3.querySelector('.block__image_fake');
  const ava = block3.querySelector('.block__image_ava');

  const block4 = document.querySelector('.block4');

  let counter = 0; 



  const handlerClickScreen = (event) => {

    if ( counter < messages.start.length ) { 
  
      titleBLock.style.opacity = 0;
  
      setTimeout(() => {
        titleBLock.innerHTML = messages.start[ counter ] || 'Так, ну я так не играю. Молю, не надо больше так быстро мякать. Перезагружайся';
        titleBLock.style.opacity = 1;
    
        counter++;
    
      }, 500);
  
    } else {

      if ( counter - messages.start.length < messages.middle.length ) {

        if ( counter - messages.start.length == 0 ) {
          titleBLock.innerHTML = '';
          fakeAva.style.opacity = 1;
        } else {
          fakeAva.style.opacity = 0;
        }

        titleBLock.style.opacity = 0;
  
        setTimeout(() => {
          titleBLock.innerHTML = messages.middle[ counter - messages.start.length ] || 'Так, ну я так не играю. Молю, не надо больше так быстро мякать. Перезагружайся';
          titleBLock.style.opacity = 1;
      
          counter++;
      
        }, 500);

      } else {

        if ( counter - messages.start.length - messages.middle.length < messages.end.length ) {

          if ( counter - messages.start.length - messages.middle.length == 0 ) {
            titleBLock.innerHTML = '';
            ava.style.opacity = 1;
          } else {
            ava.style.opacity = 0;
          }

          titleBLock.style.opacity = 0;
    
          setTimeout(() => {
            titleBLock.innerHTML = messages.end[ counter - messages.start.length - messages.middle.length ] || 'Так, ну я так не играю. Молю, не надо больше так быстро мякать. Перезагружайся';
            titleBLock.style.opacity = 1;
        
            counter++;
        
          }, 500);
  
        } else {

          block3.removeEventListener('click', handlerClickScreen);
  
          setTimeout(() => {
      
            if ( !titleBLock.textContent.match('мякать') ) {
              titleBLock.textContent = '';
              blockInputs.style = 'opacity: 1; pointer-events: all';
              blockImage.style.opacity = 1;
            }
      
          }, 1000);
        }
      }
    }
  };



  block3.addEventListener('click', handlerClickScreen);

  blockInputs.addEventListener('input', (event) => {

    if ( event.target !== inputs[2]) {
  
      event.target.nextElementSibling.focus();
  
    } else {
  
      if ( inputs[0].value == 8 && inputs[1].value == 3 && inputs[2].value == 5) {
  
        block3.style = 'display: none';
        block4.style = 'opacity: 1; pointer-events: all; position: static';
  
      } else {
  
        blockPrompt.innerHTML = 'МЯУ МЯУ МЯУ *что-то не сходится*';
        blockPrompt.style = 'opacity: 1; color: red; font-weight: 400';
  
        setTimeout(() => {
  
          blockPrompt.innerHTML = 'Нарьян-Марский отличник боится йети))';
  
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