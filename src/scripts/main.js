'use strict';

const inputsArr = [...document.querySelectorAll('input')];

for (const input of inputsArr) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name.toUpperCase();
  input.parentElement.append(label);

  input.placeholder = input.name.split(/(?=[A-Z])/)
    .map(letter => letter.charAt(0).toUpperCase()
     + letter.substring(1).toLowerCase()).join(' ');
};
