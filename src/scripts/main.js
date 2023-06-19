'use strict';

const inputAll = document.querySelectorAll('input');

const addLabel = [...inputAll].forEach(input => {
  const label = document.createElement('label');
  const idAttribute = input.getAttribute('id');
  const inputName = input.getAttribute('name');
  const parentContainer = input.parentElement;

  label.classList.add('field-label');
  label.setAttribute('for', idAttribute);
  label.textContent = inputName;

  parentContainer.append(label);

  return addLabel;
});

const addPlaceholder = [...inputAll].forEach(input => {
  const inputName = input.getAttribute('name');
  let modifiedName = '';

  modifiedName += inputName.charAt(0).toUpperCase();

  for (let i = 1; i < inputName.length; i++) {
    const char = inputName[i];

    if (char === char.toUpperCase()) {
      modifiedName += ' ';
      modifiedName += char.toLowerCase();
    } else {
      modifiedName += char;
    }
  }

  input.setAttribute('placeholder', modifiedName);

  return addPlaceholder;
});
