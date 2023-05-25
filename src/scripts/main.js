'use strict';

const inputs = document.querySelectorAll('input');
const inputsArray = Array.from(inputs);
const fields = document.getElementsByClassName('field');

const putLabel = () => {
  for (let i = 0; i < inputsArray.length; i++) {
    fields[i].insertAdjacentHTML('afterbegin',
      `<label for="${inputs[i].id}"`
      + `class="field-label">${inputs[i].name}</label>`);
  }
};

const putPlaceHolder = () =>
  inputs.forEach(x => x.setAttribute('placeholder', `${x.name.charAt(0).toUpperCase() + x.name.slice(1)}`));

putLabel();
putPlaceHolder();
