'use strict';

// write code here
const arrInput = document.querySelectorAll('form input');

arrInput.forEach((input) => {
  const divEl = input.parentElement;
  const labelEl = document.createElement('label');
  const nameInput = input.getAttribute('name').replace(/([A-Z])/g, ' $1');

  divEl.insertBefore(labelEl, input);
  labelEl.className = 'field-label';
  labelEl.setAttribute('for', input.getAttribute('id'));
  labelEl.textContent = nameInput;

  input.placeholder = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
});
