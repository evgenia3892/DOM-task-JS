'use strict';


let menu = document.getElementsByClassName('menu')[0];
let menuItem = document.getElementsByClassName('menu-item');
let li = document.createElement('li');

/* Order elements */
menu.insertBefore(menuItem[2], menuItem[1]);

/* New li */
li.classList.add('menu-item');
li.innerHTML = 'Пятый элемент';
menu.appendChild(li);

/* Background-image */
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

/* Title page */
let title = document.querySelector('.title');
title.innerHTML = 'Мы продаем только подлинную технику Apple';

/* Block advertisement  */
let advertisement = document.querySelector('.adv');
advertisement.remove();
/* Your relation */
let promptForApple = document.querySelector('#prompt');
let relation = prompt('Ваше отношение к технике Apple?');
promptForApple.textContent = relation;