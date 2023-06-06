"use strict";
// burger menu
const menu = document.querySelector('#menu'),
    barsBtn = document.querySelector('#bars-btn'),
    closeBtn = document.querySelector('#close-btn');

if(barsBtn){
    barsBtn.addEventListener('click', addClassName);
}

if(closeBtn){
    closeBtn.addEventListener('click', removeClassName);
}

function addClassName() {
    menu.classList.add('show');
    barsBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function removeClassName() {
    menu.classList.remove('show');
    barsBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}

//**при нажатии на ссылку меню скрывается */
const navLink = document.querySelectorAll('.menu__link');

function linkAction() {
    const navMenu = document.querySelector('#menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', removeClassName));

