'use strict';

const inputs = document.querySelectorAll('.field-text');

function getName(oldName) {
  const parts = [];

  if (Array.from(oldName).some((l) => l === l.toUpperCase())) {
    for (let i = 1; i < oldName.length; i++) {
      if (oldName[i] === oldName[i].toUpperCase()) {
        parts.push(oldName.slice(0, i));
        parts.push(oldName.slice(i));
      }
    }
  } else {
    return oldName;
  }

  return parts.join(' ');
}

inputs.forEach((input) => {
  const newName = getName(input.name);

  input.setAttribute('placeholder', newName);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = newName;

  input.before(label);
});
