'use strict';

const allInputs = document.getElementsByTagName('input');

for (let i = 0, len = allInputs.length; i < len; i++) {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  allInputs[i].before(newLabel);
  newLabel.innerText = allInputs[i].name;
  allInputs[i].setAttribute('placeholder', allInputs[i].name);
}
