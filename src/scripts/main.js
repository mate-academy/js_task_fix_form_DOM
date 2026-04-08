'use strict';

// write code here
const fieldText = document.querySelectorAll('.field-text');

function splitCamelCase(str) {
  let string = str;

  if (string.charAt(0).toUpperCase() === string.charAt(0)) {
    string = ' ' + string;
  }

  return string.replace(/([a-z])([A-Z])/g, '$1 $2').trim();
}

function capitalizeWords(str) {
  if (str === null || str === undefined) {
    return '';
  }

  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

fieldText.forEach((input) => {
  const InputName = 'name';
  const label = document.createElement('label');
  const nameInput = input.getAttribute(InputName)
    ? splitCamelCase(input.getAttribute(InputName))
    : null;
  const capitalizedWords = capitalizeWords(nameInput);
  const parentInput = input.parentNode;

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute(InputName));
  label.textContent = nameInput.toUpperCase();

  input.setAttribute('placeholder', capitalizedWords);

  parentInput.insertBefore(label, input);
});
