'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = inputs[i].id;
  label.textContent = capitalize(inputs[i].name);

  if (label.textContent === 'FirstName'
    || label.textContent === 'LastName') {
    label.textContent = splitByCamelCase(inputs[i].name);
  }
  inputs[i].parentElement.append(label);

  inputs[i].placeholder = capitalize(inputs[i].name);

  if (inputs[i].placeholder === 'FirstName'
  || inputs[i].placeholder === 'LastName') {
    inputs[i].placeholder = splitByCamelCase(inputs[i].name);
}
}

function capitalize(inputName) {
  return inputName[0].toUpperCase() + inputName.slice(1);
}

function splitByCamelCase(stringToSplit) {
  const splitted = stringToSplit.replace(/([A-Z])/g, ' $1');

  return splitted.charAt(0).toUpperCase() + splitted.slice(1);
}
