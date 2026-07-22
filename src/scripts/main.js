'use strict';

function splitCamelCaseWord(match) {
  return ' ' + match.toLowerCase();
}

function formatFieldName(text) {
  const result = text.replace(/[A-Z]/g, splitCamelCaseWord);

  return result.charAt(0).toUpperCase() + result.slice(1);
}

const forms = Array.from(document.querySelectorAll('form'));
const inputs = forms.flatMap((form) => {
  return Array.from(form.querySelectorAll('input'));
});

inputs.forEach((item) => {
  const newLabel = document.createElement('label');
  const fieldName = formatFieldName(item.name);

  newLabel.setAttribute('for', item.id);
  newLabel.classList.add('field-label');
  newLabel.textContent = fieldName;
  item.setAttribute('placeholder', fieldName);
  item.insertAdjacentElement('beforebegin', newLabel);
});
