'use strict';

// write code here

const inputs = Array.from(document.querySelectorAll('input'));

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name.replace(/([A-Z])/g, ' $1').toUpperCase();
  label.className = 'field-label';
  inputs[i].parentElement.append(label);

  inputs[i].placeholder = inputs[i].name[0].toUpperCase()
    + inputs[i].name.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase();
}
