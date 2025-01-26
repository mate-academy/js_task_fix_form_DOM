'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const labelContent = splitCamellCase(input.name);
  const inputPlaceholder = upperCaseFirstLetter(labelContent);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = labelContent;
  input.placeholder = inputPlaceholder;
  input.before(label);
}

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitCamellCase(string) {
  let result = string;

  for (let i = 0; i < string.length; i++) {
    if (result.charAt(i) === result.charAt(i).toUpperCase()) {
      result = result.slice(0, i) + ' ' + result.slice(i, result.length);
    }
  }

  return result.toLowerCase();
}
