'use strict';

const inputs = document.querySelectorAll('.field-text');
const fields = document.querySelectorAll('.field');
const fieldsArray = [ ...fields ];
const inputsArray = [ ...inputs ];
const startIndex = 0;

for (let i = 0; i < inputsArray.length; i++) {
  fieldsArray[i].insertAdjacentHTML('afterbegin', `
    <label for=${inputsArray[i].id} class ='field-label'></label>
  `);
}

const labelsArr = [ ...document.querySelectorAll('.field-label') ];

inputsArray.forEach((input, inputIndex) => {
  for (let letterIndx = 0; letterIndx < input.name.length; letterIndx++) {
    if (input.name[letterIndx] === input.name[letterIndx].toUpperCase()
      && letterIndx !== startIndex) {
      labelsArr[inputIndex].textContent += ' ';
      input.placeholder += ' ';
    }

    const inputName = input.name[letterIndx];

    input.placeholder += letterIndx === startIndex
      ? inputName.toUpperCase() : inputName;

    labelsArr[inputIndex].textContent += input.name[letterIndx];
  }
});
