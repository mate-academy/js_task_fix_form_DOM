'use strict';

// write code here
const inputObject = { ...document.querySelectorAll('.field-text') };

const inputDividedArray = [];

for (const names in inputObject) {
  let inputNameSeparated = '';
  const inputCamel = inputObject[names].name;

  for (let i = 0; i < inputCamel.length; i++) {
    if (/[A-Z]/.test(inputCamel[i])) {
      inputNameSeparated += ' ';
    }
    inputNameSeparated += inputCamel[i];
  }
  inputDividedArray.push(inputNameSeparated);
}

const wrappers = [ ...document.querySelectorAll('.field') ];

for (let i = 0; i < wrappers.length; i++) {
  wrappers[i].insertAdjacentHTML('beforeend',
    `<label for="${inputObject[i].id}" 
      class="field-label"
    >
      ${inputDividedArray[i]}
    </label>`
  );
}

const inputArray = [ ...document.querySelectorAll('.field-text') ];

for (let i = 0; i < inputArray.length; i++) {
  inputArray[i].placeholder = `${inputDividedArray[i].slice(0, 1).toUpperCase()
    + inputDividedArray[i].slice(1)}`;
}
