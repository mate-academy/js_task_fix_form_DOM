'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    const label = document.createElement('label');

    label.setAttribute('for', input.id);
    label.textContent = input.name;
    label.className = 'field-label';
    input.before(label);
    input.setAttribute('placeholder', formatName(input.name));
  }
}

function formatName(string) {
  let resultString = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toLowerCase()) {
      resultString = resultString.slice(0, i) + ' '
        + resultString.slice(i);
    }
  }

  return resultString[0].toUpperCase() + resultString.slice(1);
}
