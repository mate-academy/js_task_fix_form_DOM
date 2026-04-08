'use strict';

const tables = document.querySelectorAll('.field');

Array.from(tables).forEach((table) => {
  const input = table.querySelector('input');
  const labelName = document.createElement('label');
  const inputId = input.id;
  const inputPlaceholder = input.name;

  labelName.textContent = input.name;

  labelName.setAttribute('for', inputId);
  input.setAttribute('placeholder', inputPlaceholder);
  labelName.classList.add('field-label');

  input.insertAdjacentElement('beforebegin', labelName);
});
