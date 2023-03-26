'use strict';

const inputs = document.querySelectorAll('.field-text');
const field = document.querySelectorAll('.field');

for (let i = 0; i < inputs.length; i++) {
  const atributeName = inputs[i].getAttribute('name');
  const nameForPlaceholder
    = atributeName.replace(atributeName[0], atributeName[0].toUpperCase());
  const nameForLabel = atributeName;

  inputs[i].placeholder = nameForPlaceholder;

  const html
  = `<label 
      for = "${atributeName}"
      class = "field-label">${nameForLabel}
    </label>`;

  field[i].insertAdjacentHTML('afterbegin', html);
}
