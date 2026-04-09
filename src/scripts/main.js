'use strict';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitWords(string) {
  return string.replace(/([A-Z])/g, ' $1').trim();
}

function formatString(string) {
  const spacedString = splitWords(string);

  return capitalizeFirstLetter(spacedString);
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for=${input.id}>${formatString(input.name)}</label>`,
  );

  input.setAttribute('placeholder', formatString(input.name));
}
