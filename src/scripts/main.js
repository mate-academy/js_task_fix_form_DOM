'use strict';

const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputs[i].name;
  label.htmlFor = inputs[i].id;

  inputs[i].parentElement.append(label);

  inputs[i].placeholder = inputs[i].name[0].toUpperCase()
    + inputs[i].name.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase();
};
