'use strict';

const inputs = [...document.querySelectorAll('input')];

function labelName(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}

function placeholderName(str) {
  const result = str.replace(/([A-Z])/g, ' $1').trim();

  return result.charAt(0).toUpperCase() + result.slice(1);
}

inputs.forEach((input) => {
  if (!input.name) {
    return;
  }

  const label = document.createElement('label');

  input.before(label);

  label.className = 'field-label';

  label.textContent = labelName(input.name);

  input.setAttribute('placeholder', placeholderName(input.name));
});
