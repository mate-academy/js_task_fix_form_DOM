'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const fields = form.querySelectorAll('.field');

  for (const field of fields) {
    const fieldName = field.querySelector('input').name;

    let capitalizedFieldName = '';

    for (const char of fieldName) {
      if (char.toUpperCase() === char) {
        capitalizedFieldName += ` ${char}`;
        continue;
      }

      capitalizedFieldName += char;
    }
    capitalizedFieldName = capitalizedFieldName.split('');
    capitalizedFieldName[0] = capitalizedFieldName[0].toUpperCase();

    capitalizedFieldName = capitalizedFieldName.join('');

    const fieldInput = field.querySelector('input');

    fieldInput.placeholder = capitalizedFieldName;
    fieldInput.insertAdjacentHTML('beforebegin', '<label>');

    const fieldLabel = fieldInput.previousElementSibling;

    fieldLabel.className = 'field-label';
    fieldLabel.htmlFor = fieldInput.id;
    fieldLabel.textContent = capitalizedFieldName;
  }
}
