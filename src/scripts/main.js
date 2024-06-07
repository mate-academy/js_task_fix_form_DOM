'use strict';

const inputsPage = document.querySelectorAll('.field-text');

inputsPage.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${input.id}`);
  label.textContent = splitCamelCase(input.name).toUpperCase();

  const inputParentElement = input.closest('.field');

  inputParentElement.prepend(label);

  input.placeholder = splitCamelCase(input.name);
});

function splitCamelCase(camelCaseStr) {
  const chars = camelCaseStr.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = ' ' + chars[i];
    }
  }

  chars[0] = chars[0].toUpperCase();

  return chars.join('');
}
