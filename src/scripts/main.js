'use strict';

const inputAll = document.querySelectorAll('input');

return [...inputAll].forEach(input => {
  const label = document.createElement('label');
  const idAttribute = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  const parentContainer = input.parentElement;

  let modifiedName = '';

  modifiedName += inputName[0].toUpperCase();

  for (let i = 1; i < inputName.length; i++) {
    const char = inputName[i];

    if (char === char.toUpperCase()) {
      modifiedName += ' ';
      modifiedName += char.toLowerCase();
    } else {
      modifiedName += char;
    }
  }

  label.classList.add('field-label');
  label.setAttribute('for', idAttribute);
  label.textContent = modifiedName;

  parentContainer.append(label);
  input.setAttribute('placeholder', modifiedName);
});
