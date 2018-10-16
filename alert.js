'use strict';

var admin = prompt('Кто пришёл?', '');

if (admin == 'Admin'){
   var adminPassword = prompt('Введите пароль', '');
   if (adminPassword = 'ПарольАдмина'){
       alert('Добропожаловать, Администратор!');
   }
   else alert('Пароль неверный');
}

else if(admin == null) {
    alert('Вход отменён')
}

else {
    alert(admin+' , Я вас не знаю');
}
