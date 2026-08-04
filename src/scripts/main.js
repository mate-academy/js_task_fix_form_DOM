'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.getAttribute('id'));
  label.textContent = el.getAttribute('name');

  el.before(label);
});

inputs.forEach((el) => {
  const inputName = el.getAttribute('name');

  const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  el.setAttribute('placeholder', capitalized);
});
