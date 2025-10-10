'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const allLabel = document.createElement('label');

  allLabel.classList.add('field-label');
  allLabel.textContent = input.name[0].toUpperCase() + input.name.slice(1);
  allLabel.setAttribute('for', input.id);
  input.placeholder = allLabel.textContent;
  input.parentElement.prepend(allLabel);
}
