'use strict';
const modal = document.querySelector('.modal');
const showBtn = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

showBtn.forEach(btn => btn.addEventListener('click', openModal));

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
