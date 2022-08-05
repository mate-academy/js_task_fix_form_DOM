'use strict';

const inputElements = document.querySelectorAll('.field-text');

for (const element of inputElements) {
  element.insertAdjacentHTML('beforebegin', `
  <label for="${element.id}" class="field-label">${element.name}</label>`);
  element.setAttribute('placeholder', capitalize(element.name));
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
