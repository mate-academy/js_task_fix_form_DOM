'use strict';

const inputs = document.querySelectorAll('.field-text');

function convertCamelCaseToWords(camelCaseString) {
  return camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/^./, match => match.toUpperCase());
}

inputs.forEach(node => {
  const labelName = node.getAttribute('name');
  const inputLabel = document.createElement('label');
  const labelFor = node.getAttribute('id');

  inputLabel.className = 'field-label';
  inputLabel.setAttribute('for', labelFor);
  inputLabel.textContent = labelName;

  node.after(inputLabel);

  node.placeholder = convertCamelCaseToWords(labelName);
});
