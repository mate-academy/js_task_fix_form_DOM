'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const nameWithSpace = input.name.replace(/(?=[A-Z])/, ' ');
  const label = document.createElement('label');
  const parentEl = input.parentElement;

  input.placeholder = input.name[0].toUpperCase() + nameWithSpace.slice(1);

  label.className = 'field-label';
  label.textContent = input.name;
  label.setAttribute('for', input.id);
  parentEl.append(label);
});
