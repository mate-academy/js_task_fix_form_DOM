'use strict';

const inputs = document.querySelectorAll('.field-text');
const fields = document.querySelectorAll('.field');
const fieldsArray = [ ...fields ];
const inputsArray = [ ...inputs ];

for (let i = 0; i < inputsArray.length; i++) {
  fieldsArray[i].insertAdjacentHTML('afterbegin', `
    <label for=${inputsArray[i].id} class ='field-label'></label>
  `);
}

const labelsArr = [ ...document.querySelectorAll('.field-label') ];

for (let i = 0; i < labelsArr.length; i++) {
  for (let y = 0; y < inputsArray[i].name.length; y++) {
    if (inputsArray[i].name[y] === inputsArray[i].name[y].toUpperCase()
      && y !== 0) {
      labelsArr[i].textContent += ' ';
      inputsArray[i].placeholder += ' ';
    }

    if (y === 0) {
      inputsArray[i].placeholder += inputsArray[i].name[y].toUpperCase();
    } else {
      inputsArray[i].placeholder += inputsArray[i].name[y];
    }

    labelsArr[i].textContent += inputsArray[i].name[y];
  }
}
