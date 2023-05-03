"use strict";

// Modal
const modal = document.querySelector('.modal'),
    btnTrigger = document.querySelectorAll('[data-modal'),
    btnClose = document.querySelector('[data-close');

function showModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
}

btnTrigger.forEach(btn => {
    btn.addEventListener('click', showModal);
})

btnClose.addEventListener('click', hideModal);

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')) {
        hideModal();
    }
});