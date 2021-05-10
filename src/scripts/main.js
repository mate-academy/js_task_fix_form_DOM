'use strict';

const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  inputs[i].placeholder = inputs[i].name;

  const label = document.createElement('label');

  label.setAttribute('for', inputs[i].id);
  label.className = 'field-label';
  label.textContent = inputs[i].name.toUpperCase();

  inputs[i].parentNode.append(label);
}
