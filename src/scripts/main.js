'use strict';

const fieldTextInputs = document.querySelectorAll('.field-text');

for (const input of fieldTextInputs) {
  const fixedName = input.name.replace(/Name/, ' Name');
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.textContent = fixedName;
  newLabel.htmlFor = input.id;
  input.before(newLabel);

  input.placeholder = fixedName[0].toUpperCase() + fixedName.slice(1);
}
