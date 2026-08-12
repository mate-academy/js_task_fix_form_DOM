'use strict';

const inputs = document.querySelectorAll('form input');

function capitalize(text) {
  if (!text) {
    return '';
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

inputs.forEach((input) => {
  const inputName = input.name;
  const inputId = input.id;
  const formattedName = capitalize(inputName);
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = inputId;
  label.textContent = formattedName;

  input.placeholder = formattedName;

  const parentContainer = input.parentElement;

  parentContainer.prepend(label);
});
