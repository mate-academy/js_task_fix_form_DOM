'use strict';

const collectionInputs = document.querySelectorAll('form input');
const inputs = Array.from(collectionInputs);
const collectionDivField = document.querySelectorAll('.field');

function modifiesString(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toUpperCase();
      continue;
    }

    if (str[i] === str[i].toUpperCase()) {
      result += ` ${str[i].toLowerCase()}`;
      continue;
    }

    result += str[i];
  }

  return result;
}

collectionDivField.forEach((fied, ind) => {
  const labelEl = document.createElement('label');
  const idInput = inputs[ind].getAttribute('id');
  const nameImput = inputs[ind].getAttribute('name');

  inputs[ind].setAttribute('placeholder', modifiesString(nameImput));

  labelEl.setAttribute('for', idInput);
  labelEl.classList.add('field-label');
  labelEl.textContent = modifiesString(nameImput);

  fied.insertAdjacentElement('afterbegin', labelEl);
});
