'use strict';

// write code here

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';

  const id = input.getAttribute('id');

  label.setAttribute('for', id);

  const text = input.getAttribute('name');

  label.textContent = text;

  input.setAttribute('placeholder', text.toUpperCase());

  input.insertAdjacentElement('beforebegin', label);
});
