'use strict';

const fieldTexts = document.querySelectorAll('.field-text');

for (const fieldText of fieldTexts) {
  const idFromField = fieldText.getAttribute('id');
  let nameFromField = fieldText.getAttribute('name');
  const label = document.createElement('label');

  if (nameFromField === 'firstName') {
    nameFromField = 'first name';
  }

  if (nameFromField === 'lastName') {
    nameFromField = 'last name';
  }

  label.classList.add('field-label');
  label.setAttribute('for', idFromField);
  label.textContent = nameFromField;

  fieldText.before(label);

  fieldText.setAttribute('placeholder', nameFromField);
}
