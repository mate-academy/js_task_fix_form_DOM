'use strict';

const inputElements = document.querySelectorAll('.field-text');

for (const element of inputElements) {
  element.insertAdjacentHTML('beforebegin', `
  <label for="${element.id}" class="field-label">
    ${getDivided(element.name)}
  </label>`);
  element.setAttribute('placeholder', getCapitalize(getDivided(element.name)));
}

function getCapitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function getDivided(string) {
  return string.split('').map(letter => {
    if (letter.toUpperCase() === letter) {
      return ` ${letter}`;
    } else {
      return letter;
    }
  }).join('');
}
