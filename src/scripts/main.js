'use strict';

const inputs = document.querySelectorAll('.field-text');
const parents = document.querySelectorAll('.field');

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name.replace(/([A-Z])/g, ' $1');
  label.htmlFor = input.id;

  parents[index].append(label);

  let placeholder = input.name.replace(/([A-Z])/g, ' $1');

  placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  input.placeholder = placeholder;
});
