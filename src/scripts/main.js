'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = input.name;

  input.setAttribute('placeholder', input.name);

  input.parentNode.insertAdjacentElement('afterbegin', label);
});
