'use strict';

// write code here
const inputs = document.querySelectorAll('.field-text');

inputs.forEach((item) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = item.id;
  label.textContent = item.name;

  item.before(label);
  item.placeholder = normalizedText(item.name);
});

function normalizedText(string) {
  let result = '';

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += ' ' + string[i];
    } else {
      result += string[i];
    }
  }
  result = string[0].toUpperCase() + result;

  return result;
}
