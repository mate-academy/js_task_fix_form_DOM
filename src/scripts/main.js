'use strict';

function camelCaseToArray(inputString = '') {
  const wordsArray = inputString.split(/(?=[A-Z])/);
  const lowercaseArray = wordsArray.map((word) => word.toLowerCase());

  return lowercaseArray;
}

document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach(function(input) {
    const label = document.createElement('label');
    const newTextContent = camelCaseToArray(input.name)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    label.textContent = newTextContent;
    input.placeholder = newTextContent;

    input.parentNode.appendChild(label);
  });
});
