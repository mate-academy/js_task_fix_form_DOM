'use strict';

const fieldTextInput = document.querySelectorAll('.field-text');

for (const x of fieldTextInput) {
  const fixedName = x.name.replace(/Name/, ' Name');
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.textContent = fixedName;
  newLabel.htmlFor = x.id;
  x.before(newLabel);

  x.placeholder = fixedName[0].toUpperCase() + fixedName.slice(1);
}
