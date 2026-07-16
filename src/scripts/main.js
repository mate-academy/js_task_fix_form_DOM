'use strict';

const newInput = document.querySelectorAll('.field-text');
const newInputArray = Array.from(newInput);

function formatLabel(fieldName) {
  const spaced = fieldName.replace(/([A-Z])/g, (letter) => {
    return ' ' + letter;
  });

  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

newInputArray.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatLabel(input.name);

  const fieldContainer = input.parentElement;

  fieldContainer.insertBefore(label, input);

  input.placeholder = formatLabel(input.name);
});
