'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    let capitalizedFieldName = '';

    for (const char of input.name) {
      if (char.toUpperCase() === char) {
        capitalizedFieldName += ` ${char}`;
        continue;
      }

      capitalizedFieldName += char;
    }
    capitalizedFieldName = capitalizedFieldName.split('');
    capitalizedFieldName[0] = capitalizedFieldName[0].toUpperCase();

    capitalizedFieldName = capitalizedFieldName.join('');

    input.placeholder = capitalizedFieldName;

    const inputLabel = document.createElement('label');

    input.after(inputLabel);

    inputLabel.className = 'field-label';
    inputLabel.htmlFor = input.id;
    inputLabel.textContent = capitalizedFieldName;
  }
}
