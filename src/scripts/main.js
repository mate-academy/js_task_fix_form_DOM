'use strict';

const inputs = document.querySelectorAll('input');

const normalizeName = (currentName) => {
  let newName = '';

  for (const ch of currentName) {
    if (ch === ch.toUpperCase()) {
      newName += ' ' + ch;
    } else {
      newName += ch;
    }
  }

  newName = newName[0].toUpperCase() + newName.slice(1);

  return newName;
};

for (const input of inputs) {
  const label = document.createElement('label');
  const labelName = normalizeName(input.name);

  input.parentNode.append(label);
  input.setAttribute('placeholder', labelName);

  label.setAttribute('for', `${input.id}`);
  label.textContent = labelName;
  label.classList.add('field-label');
}
