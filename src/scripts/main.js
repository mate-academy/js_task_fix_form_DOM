'use strict';

const inputs = document.querySelectorAll('form input');

function formatName(example) {
  let result = '';

  result += example[0].toUpperCase();

  for (let n = 1; n <= example.length - 1; n++) {
    if (example[n] !== example[n].toLowerCase()) {
      result += ' ';
    }
    result += example[n];
  }

  return result;
}

inputs.forEach((input) => {
  input.placeholder = formatName(input.name);

  const label = document.createElement('label');

  label.textContent = formatName(input.name);
  input.parentElement.append(label);
  label.htmlFor = input.id;
  label.className = 'field-label';
});
