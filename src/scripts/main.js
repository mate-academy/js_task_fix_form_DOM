'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('LABEL');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.parentElement.appendChild(label);

  const placeholderName = input.name.replace(/([A-Z])/g, ' $1').toLowerCase();

  input.placeholder = (
    placeholderName[0].toUpperCase() + placeholderName.slice(1)
  );
}
