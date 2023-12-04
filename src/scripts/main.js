'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelElement = document.createElement('label');

  labelElement.className = 'field-label';
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = getFirstLetterToUpper(input.name);

  input.setAttribute(
    'placeholder',
    getFirstLetterToUpper(input.name),
  );

  input.parentElement.append(labelElement);
}

function getFirstLetterToUpper(word) {
  return (word.charAt(0).toUpperCase()
  + word.slice(1)).split(/(?=[A-Z])/).join(' ');
}
