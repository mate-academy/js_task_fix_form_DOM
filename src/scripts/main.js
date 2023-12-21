'use strict';

const inputs = document.querySelectorAll('input');
const inputsArr = [...inputs];

function getCapitalized(string) {
  return string
  // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
  // uppercase the first character
    .replace(/^./, function(str) {
      return str.toUpperCase();
    });
}

for (const input of inputsArr) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = input.id;
  label.textContent = getCapitalized(input.name);

  const placeholder = getCapitalized(input.name);

  input.setAttribute('placeholder', placeholder);

  input.parentElement.prepend(label);
}
