'use strict';

// write code here
const allInputs = document.querySelectorAll('form input');

function nameFormat(inputName) {
  return inputName
    .split(/(?=[A-Z])/)
    .join(' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = nameFormat(input.name);

  input.parentElement.insertBefore(label, input);

  input.setAttribute('placeholder', nameFormat(input.name));
});
