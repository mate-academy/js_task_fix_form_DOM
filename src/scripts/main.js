'use strict';

const formFields = document.querySelectorAll('.field-text');

function separateName(word) {
  let result = word;
  result = result[0].toUpperCase()
    + result.slice(1, result.length).split('N').join(' N');

  return result;
}

for (const textField of [...formFields]) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = separateName(textField.name);
  label.setAttribute('for', textField.id);
  textField.parentElement.insertBefore(label, textField);

  textField.placeholder = separateName(textField.name);
}
