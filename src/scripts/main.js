'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((element) => {
  const label = document.createElement('label');
  const inputName = element.getAttribute('name');

  label.className = 'field-label';
  label.htmlFor = element.id;
  label.textContent = inputName;
  element.before(label);

  element.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
});
