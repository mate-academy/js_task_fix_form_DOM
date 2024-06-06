'use strict';

const tablet = document.querySelectorAll('.field');

Array.from(tablet).forEach((table) => {
  const input = table.querySelector('input');
  const nameCell = document.createElement('label');
  const inputId = input.id;
  const inputPlaceholder = input.name;

  nameCell.textContent = input.name;

  nameCell.setAttribute('for', inputId);
  input.setAttribute('placeholder', inputPlaceholder);
  nameCell.classList.add('field-label');

  input.insertAdjacentElement('beforebegin', nameCell);
});
