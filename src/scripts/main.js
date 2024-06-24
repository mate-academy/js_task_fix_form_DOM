'use strict';

const inputs = document.querySelectorAll('input');
const divs = document.querySelectorAll('.field');

for (let index = 0; index < inputs.length; index++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputs[index].id);

  const labelName = inputs[index].name;
  const formattedName =
    labelName.slice(0, 1).toUpperCase() +
    labelName.slice(1).replace(/[A-Z]/g, ' $&').toLowerCase();

  label.textContent = formattedName;

  inputs[index].setAttribute('placeholder', formattedName);
  divs[index].append(label);
}
