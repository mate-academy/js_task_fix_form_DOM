'use strict';

const fields = document.querySelectorAll('.field');

function formatString(inputString) {
  const spaceSeparatedString = inputString.replace(/([A-Z])/g, ' $1').trim();

  return spaceSeparatedString.charAt(0).toUpperCase()
  + spaceSeparatedString.slice(1);
}

fields.forEach(field => {
  const label = document.createElement('label');

  field.children[0].setAttribute('placeholder',
    formatString(field.children[0].name));

  label.className = 'field-label';
  label.htmlFor = field.children[0].id;
  label.textContent = formatString(field.children[0].name);

  field.append(label);
});
