'use strict'

$(document).ready(function(){
    
    $('.contacts__form-input').focus(function(){
        $(this).css('outline', '2px solid goldenrod'); 
    })
    $('.contacts__form-input').blur(function(){
        $(this).css('outline', 'none'); 
    })

    $('.contacts__form-textarea').focus(function(){
        $(this).css('outline', '2px solid goldenrod'); 
    })
    $('.contacts__form-textarea').blur(function(){
        $(this).css('outline', 'none'); 
    })

    $('.contacts__form-input--user').keyup(function(){
        $('#user__text').text($(this).val() + '! ');
    })

    $('.card__input1').keyup(function(){
        $('#card__number1').text($(this).val());
    })
    $('.card__input2').keyup(function(){
        $('#card__number2').text($(this).val());
    })
    $('.card__input3').keyup(function(){
        $('#card__number3').text($(this).val());
    })

    $('.card__input4').keyup(function(){
        $('#card__number4').text($(this).val());
    })

    $('.card__text-input').keyup(function(){
        $('#cardholder-span').text($(this).val());
    })

    $('.card__date-input1').keyup(function(){
        $('#card__date-span1').text($(this).val());
    })
    
    $('.card__date-input2').keyup(function(){
        $('#card__date-span2').text($(this).val());
    })

    $('.card__valid-input').focus(function(){
        $('.card__front').css('transform', 'rotateY(180deg)');
        $('.card__back').css('transform', 'rotateY(360deg)');

    })

    $('.card__valid-input').blur(function(){
        $('.card__front').css('transform', 'rotateY(0deg)');
        $('.card__back').css('transform', 'rotateY(180deg)');

    })

    $('.card__valid-input').keyup(function(){
        $('#card__valid-span').text($(this).val());
    })

})

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
       return true;
    };


// Находим все элементы по селектору .tabs__btn-item:
const tabItem = document.querySelectorAll('.tabs__btn-item')

// Находим все элементы по селектору .tabs__content-item:
const tabContent = document.querySelectorAll('.tabs__content-item')
// пробегаемся по элементам tabItem циклом:
tabItem.forEach(function(element){
// отслеживание клика, при клике запускается функция open
    element.addEventListener('click', open)
});
// описываем функцию open
function open(evt){
// создаем переменную tabTarget, находим элемент, на который нажали
    const tabTarget = evt.currentTarget;
// создаем переменную button, ищем свойство dataset элементов button
    const button = tabTarget.dataset.button;
// пробегаемся по всем tabItem и убираем класс .tabs__btn-item--active
    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    })
// пробегаемся по всем tabContent и убираем класс .tabs__btn-item--active
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    })
// tabTarget добавляем класс .tabs__btn-item--active
    tabTarget.classList.add('tabs__btn-item--active');
// находим button по id, добавляем ему класс tabs__content-item--active
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

let modalBtn = document.querySelector("#modal_btn");
let modal = document.querySelector(".modal");

// const clickModalBtn = function() {
//     let modal = document.querySelector(".modal");
//     modalBtn.click = modal.setAttribute("display", "none");
// };

modalBtn.addEventListener("click", close);
   function close() {  
   modal.classList.add("close")
   };