'use strict';

function formatPlaceholder(inputName) {
  let formattedName = '';

  for (let i = 0; i < inputName.length; i++) {
    const char = inputName[i];

    if (char === char.toUpperCase() && i !== 0) {
      formattedName += ' ';
    }
    formattedName += char;
  }

  return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
}

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const id = input.getAttribute('id');

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = inputName;
  label.setAttribute('for', id);
  input.before(label);

  input.setAttribute('placeholder', formatPlaceholder(inputName));
});
