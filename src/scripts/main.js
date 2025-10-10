'use strict';

const allInputs = document.querySelectorAll('form input');

for (const input of allInputs) {
  const allLabel = document.createElement('label');

  allLabel.classList.add('field-label');
  allLabel.textContent = input.name;
  allLabel.setAttribute('for', input.id);
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  input.parentElement.prepend(allLabel);
}
