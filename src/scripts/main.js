'use strict';

const inputs = document.querySelectorAll('input');
const parents = document.querySelectorAll('.field');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;

  inputs[i].setAttribute(
    'placeholder',
    inputs[i].name[0].toUpperCase() + inputs[i].name.substring(1)
  );

  parents[i].append(label);
}
