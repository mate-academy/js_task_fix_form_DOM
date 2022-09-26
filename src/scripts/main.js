'use strict';

const inputElements = document.querySelectorAll('input');

function capitalizeText(currText) {
  return currText.charAt(0).toUpperCase()
    + currText.slice(1);
}

for (const inputElement of inputElements) {
  inputElement.placeholder = capitalizeText(inputElement.name);

  inputElement.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${inputElement.id}">
  ${inputElement.name.toUpperCase()}
  </label>
`);
}
