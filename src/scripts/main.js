'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const parentInput = input.parentNode;

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.placeholder = convertCapitalize(input.name);
  parentInput.insertBefore(label, input);
});

function convertCapitalize(text) {
  let replaceText = text.replace(/([a-z])([A-Z])/g, '$1 $2');

  replaceText = replaceText[0].toUpperCase() + replaceText.slice(1);

  return replaceText;
}
