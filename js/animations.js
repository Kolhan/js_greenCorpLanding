const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;


function increaseNumberAnimationStep (i, element, endNumber) {
    
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        
        i += 100;

        setTimeout(function() { increaseNumberAnimationStep(i, element, endNumber) }, INCREASE_NUMBER_ANIMATION_SPEED)
    }
} 

function initIncreaseNumberAnimation() {
    let elem = document.querySelector('.features__clients-count')
    console.log(elem);
    increaseNumberAnimationStep(0, elem, 5000)
}



document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        // Должны добавить еще одно текстовое поле
        const formContainer = document.createElement('div')
        formContainer.classList.add('form__group')
        formContainer.classList.add('form__other-input')

        const input = document.createElement('input')
        input.placeholder = 'Введите ваш вариант'
        input.type = 'text'

        formContainer.appendChild(input)

        const form = document.querySelector('.form form')
        const btn =  document.querySelector('.form__submit')
        form.insertBefore(formContainer, btn)
    }
    
    
    // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
    const otherInput = document.querySelector('.form__other-input');
    if (event.target.value !== 'other' && otherInput) {
        document.querySelector('.form form').removeChild(otherInput);
    }
    
  });

  function updateScroll() {
    if (window.scrollY > 0) {
        document.querySelector('header').classList.add('header__scrolled')
    } else {
        document.querySelector('header').classList.remove('header__scrolled')
    }

     // Запуск анимации увеличения числа
     let windowBottomPosition = window.scrollY + window.innerHeight;
     let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
     if (windowBottomPosition >= countElementPosition && !animationInited) {
       animationInited = true;
       initIncreaseNumberAnimation();
     }
  }

  window.addEventListener('scroll', updateScroll)