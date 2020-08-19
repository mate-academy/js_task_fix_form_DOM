'use strict';

const inputs = document.querySelectorAll('.field-text');
const fields = document.querySelectorAll('.field');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].placeholder = inputs[i].name.charAt(0).toUpperCase()
    + inputs[i].name.replace(/([A-Z])/g, ' $1').slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputs[i].name;
  label.htmlFor = inputs[i].id;
  fields[i].append(label);
}
