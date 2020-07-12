'use strict';

const inputs = document.querySelectorAll('input');

function decamelize(camelString) {
  return camelString.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2').toLowerCase();
}

function capitalize(string) {
  return string.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substr(1)
  );
}

for (const input of inputs) {
  const parent = input.parentElement;

  input.placeholder = capitalize(decamelize(input.name));

  parent.insertAdjacentHTML(
    'beforeend',
    `<label class="field-label" for=${input.id}>${decamelize(
      input.name
    )}<label>`
  );
}
