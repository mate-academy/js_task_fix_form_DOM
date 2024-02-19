'use strict';

const inputElements = document.getElementsByTagName('input');

[...inputElements].forEach((input) => {
  const inputName = camelCaseToWords(input.name);

  input.placeholder = inputName.at(0).toUpperCase() + inputName.slice(1);

  const labelInput = document.createElement('label');

  labelInput.htmlFor = input.id;
  labelInput.textContent = inputName.toUpperCase();
  labelInput.className = 'field-label';

  input.insertAdjacentElement('beforebegin', labelInput);
});

function camelCaseToWords(inputStr) {
  return inputStr.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}
