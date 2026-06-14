'use strict';

const inputElements = [...document.querySelectorAll('form input')];

inputElements.forEach((input) => {
  input.setAttribute('placeholder', formatCamelCase(input.name));

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatCamelCase(input.name);

  input.parentElement.append(label);
});

function formatCamelCase(str) {
  const withSpaces = str.replaceAll(/([A-Z])/g, ' $1');

  return withSpaces[0].toUpperCase() + withSpaces.slice(1);
}
