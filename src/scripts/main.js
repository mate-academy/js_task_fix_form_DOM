'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  input.parentNode.insertBefore(label, input);

  const inputPlaceholder = input.getAttribute('name').toLocaleUpperCase();

  input.setAttribute('placeholder', inputPlaceholder);
});
