'use strict';

const allInputs = document.querySelectorAll('input');

for (const oneInput of allInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = oneInput.id;

  let inputName = '';

  for (const letter of oneInput.name) {
    if (letter !== letter.toUpperCase()) {
      inputName += letter;
    } else {
      inputName += ` ${letter}`;
    }
  }
  inputName = inputName[0].toUpperCase() + inputName.slice(1);
  label.textContent = inputName.toUpperCase();
  oneInput.placeholder = inputName;
  oneInput.before(label);
}
