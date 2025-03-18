'use strict';

const allInputs = [...document.querySelectorAll('input')];

function capitalize(text) {
  return String(text.charAt(0).toUpperCase() + text.slice(1));
}

allInputs.forEach((input) => {
  const label = document.createElement('label');

  input.parentElement.append(label);
  label.classList.add('field-label');
  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.textContent = `${input.getAttribute('name')}`;

  input.setAttribute('placeholder', capitalize(input.getAttribute('name')));
});
