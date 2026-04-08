'use strict';

const allInputs = [...document.querySelectorAll('input')];

for (const input of allInputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const cleanName = input.name
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  label.textContent = cleanName;
  input.setAttribute('placeholder', cleanName);

  input.before(label);
}
