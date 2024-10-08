'use strict';

const fieldTexts = document.querySelectorAll('.field-text');

for (const fieldText of fieldTexts) {
  const idFromField = fieldText.getAttribute('id');
  const nameFromField = fieldText.getAttribute('name');
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', idFromField);
  label.textContent = nameFromField;

  fieldText.insertAdjacentElement('beforebegin', label);
  fieldText.setAttribute('placeholder', nameFromField);
}
