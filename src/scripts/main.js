'use strict';

// write code here
const formInputs = document.querySelectorAll('input');

formInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');
  input.insertAdjacentElement('beforebegin', label);
  input.setAttribute('placeholder', input.getAttribute('name'));
});
