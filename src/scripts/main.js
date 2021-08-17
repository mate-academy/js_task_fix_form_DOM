'use strict';

const inputFields = [...document.querySelectorAll('.field')];
const formInputs = [...document.querySelectorAll('input')];
const classFieldLabel = 'field-label';

for (let i = 0; i < formInputs.length; i++) {
  let fieldName = formInputs[i].name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split('');

  fieldName[0] = fieldName[0].toUpperCase();

  fieldName = fieldName.join('');

  inputFields[i].insertAdjacentHTML('afterbegin', `
    <label class=${classFieldLabel} for=${formInputs[i].id}>
      ${fieldName}
    </label>
  `);
  formInputs[i].setAttribute('placeholder', fieldName);
}
