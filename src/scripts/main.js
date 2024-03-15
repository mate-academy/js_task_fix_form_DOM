'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = formatString(input.name).toUpperCase();
  input.parentElement.append(label);

  input.setAttribute('placeholder', formatString(input.name));
}

function formatString(string) {
  let result = string;

  if (string !== string.toLowerCase()) {
    const upperCharInd = string.indexOf(string.replace(/[^A-Z]/g, ''));
    const stringArr = string.split('');

    stringArr.splice(upperCharInd, 0, ' ');
    result = stringArr.join('').toLowerCase();
  }

  return result.charAt(0).toUpperCase() + result.slice(1);
}
