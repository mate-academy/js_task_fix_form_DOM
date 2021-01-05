'use strict';

const inputs = document.querySelectorAll('input');
const inputParents = document.getElementsByClassName('field');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;

  inputs[i].placeholder = inputs[i].name[0].toUpperCase()
    + inputs[i].name.slice(1);

  inputParents[i].append(label);
}
