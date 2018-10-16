'use strict';

var number = prompt('Введите число', '');
if (number >= 1){
    alert(number+' Больше 1');
}
else if (number <= -1){
    alert(number+' Меньше -1');
}
else alert('Ваше число 0');
