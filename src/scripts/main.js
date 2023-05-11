'use strict';

const inputsCollection = document.querySelectorAll('input');
const parentContainerInputCollection = document.getElementsByClassName('field');
const inputsArr = [...inputsCollection];

for (let i = 0; i < inputsArr.length; i++) {
  const elementLabel = document.createElement('label');

  elementLabel.className = 'field-label';
  elementLabel.htmlFor = inputsArr[i].id;

  elementLabel.textContent
    = (inputsArr[i].name[0].toUpperCase() + inputsArr[i].name.slice(1))
      .replace(/Name/gm, ' name');

  inputsArr[i].placeholder
    = (inputsArr[i].name[0].toUpperCase() + inputsArr[i].name.slice(1))
      .replace(/Name/gm, ' name');

  parentContainerInputCollection[i].prepend(elementLabel);
}
