'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName;

  const placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  input.setAttribute('placeholder', placeholder);

  const parentDiv = input.parentElement;

  parentDiv.appendChild(label);
});
