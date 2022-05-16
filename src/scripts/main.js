'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;

  inputs[i].parentElement.append(label);

  inputs[i].placeholder = capitalize(inputs[i].name);
}

function capitalize(inputName) {
  return inputName[0].toUpperCase() + inputName.slice(1);
}
