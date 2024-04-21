'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const id = input.getAttribute('id');
  const label = document.createElement('label');

  label.setAttribute('for', id);
  label.classList.add('field-label');
  label.textContent = capitalizeWords(input.getAttribute('name'));

  const placeholderText = capitalizeWords(input.getAttribute('name'));

  input.setAttribute('placeholder', placeholderText);

  const parentForInput = input.parentNode;

  parentForInput.insertBefore(label, input);
});

function splitInputName(string) {
  return string.split(/(?=[A-Z])/);
}

function capitalizeWords(string) {
  const words = splitInputName(string);

  return words
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
}
