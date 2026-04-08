'use strict';

const inputElements = [...document.querySelectorAll('.field-text')];

inputElements.forEach((el) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.id);
  label.textContent = addSpaceToCamelCase(el.name).toUpperCase();

  el.before(label);

  el.setAttribute('placeholder', formatString(el.name));
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addSpaceToCamelCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function formatString(string) {
  const stringWithSpaces = addSpaceToCamelCase(string);

  return capitalizeFirstLetter(stringWithSpaces);
}
