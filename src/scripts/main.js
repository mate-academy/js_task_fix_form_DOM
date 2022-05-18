'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = inputs[i].id;
  label.textContent = splitAndCapitalize(inputs[i].name);

  inputs[i].parentElement.append(label);

  inputs[i].placeholder = splitAndCapitalize(inputs[i].name);
}

function splitAndCapitalize(inputName) {
  const splitted = inputName.replace(/([A-Z])/g, ' $1');

  return splitted[0].toUpperCase() + splitted.slice(1);
}
