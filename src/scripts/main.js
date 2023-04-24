'use strict';

const inputs = document.querySelectorAll('.field-text');
const fields = document.querySelectorAll('.field');
const fieldsArray = [ ...fields ];
const inputsArray = [ ...inputs ];

for (let i = 0; i < inputsArray.length; i++) {
  for (let y = 0; y < inputsArray[i].name.length; y++) {
    if (inputsArray[i].name[y] === inputsArray[i].name[y].toUpperCase()
      && y !== 0) {
      inputsArray[i].placeholder += ' ';
    }

    if (y === 0) {
      inputsArray[i].placeholder += inputsArray[i].name[y].toUpperCase();
    } else {
      inputsArray[i].placeholder += inputsArray[i].name[y];
    }
  }

  fieldsArray[i].insertAdjacentHTML('afterbegin', `
    <label for=${inputsArray[i].id} class ='field-label'>${inputsArray[i].name}
    </label>
  `);
}
