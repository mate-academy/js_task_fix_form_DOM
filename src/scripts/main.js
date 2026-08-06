'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((el) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.getAttribute('id'));
  label.textContent = el.getAttribute('name');

  el.before(label);

  const inputName = el.getAttribute('name');

  const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  el.setAttribute('placeholder', capitalized);
});
