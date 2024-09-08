'use strict';

const allInputs = [...document.querySelectorAll('input')];

allInputs.forEach((input) => {
  input.placeholder = input.name[0].toLocaleUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.prepend(label);
});
