'use strict';

const inputsList = [...document.querySelectorAll('input')];

inputsList.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.before(label);

  input.setAttribute('placeholder', input.name);
});
