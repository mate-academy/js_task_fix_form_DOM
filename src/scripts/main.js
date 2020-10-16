'use strict';

const allInputs = document.getElementsByTagName('input');

for (let i = 0; i < allInputs.length; i++) {
  const newLabel = document.createElement('label');
  const CapitalizedPlaceholder = allInputs[i].name
    .charAt(0)
    .toUpperCase() + allInputs[i].name.slice(1);

  newLabel.className = 'field-label';
  allInputs[i].before(newLabel);
  newLabel.innerText = allInputs[i].name;
  allInputs[i].setAttribute('placeholder', CapitalizedPlaceholder);
}
