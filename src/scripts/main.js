'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');
  const parentEl = input.parentElement;

  label.className = 'field-label';
  label.textContent = input.name;
  label.setAttribute('for', input.id);
  parentEl.append(label);
});
