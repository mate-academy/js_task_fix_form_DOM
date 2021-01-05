'use strict';

const inputs = document.querySelectorAll('input');
const inputsArr = [...inputs];

for (let i = 0; i < inputsArr.length; i++) {
  inputsArr[i].insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${inputsArr[i].id}
  ">${inputsArr[i].name}</label>`);

  inputsArr[i].placeholder
  = inputsArr[i].name[0].toUpperCase() + inputsArr[i].name.slice(1);
}
