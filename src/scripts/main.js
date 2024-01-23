'use strict';

const normalizeName = (currentName) => {
  let newName = '';

  for (const ch of currentName) {
    if (ch === ch.toLocaleUpperCase()) {
      newName += ' ' + ch;
    } else {
      newName += ch;
    }
  }

  newName = newName[0].toLocaleUpperCase() + newName.slice(1);

  return newName;
};

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');
  const newName = normalizeName(input.name);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = newName;
  input.setAttribute('placeholder', newName);

  const parentContainer = input.parentNode;

  parentContainer.appendChild(label);
});
