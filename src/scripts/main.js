'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((inpt) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', inpt.getAttribute('id'));
  label.textContent = inpt.getAttribute('name');

  inpt.insertAdjacentElement('afterend', label);
  inpt.setAttribute('placeholder', inpt.getAttribute('name'));
});
