'use strict';

const inputs = document.querySelectorAll('.field-text');

const stringFormat = function(str) {
  const result = str.name.replace(/([A-Z])/g, ` $1`).toLowerCase();

  return result[0].toUpperCase() + result.slice(1);
};

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = ('field-label');
  label.htmlFor = input.id;
  label.innerText = stringFormat(input);
  input.before(label);
  input.placeholder = stringFormat(input);
};
