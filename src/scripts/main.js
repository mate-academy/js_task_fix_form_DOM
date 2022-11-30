'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  input.parentElement.append(label);
  label.className = 'field-label';

  let fieldName = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      fieldName += ' ' + input.name[i];
    } else {
      fieldName += input.name[i];
    }
  }

  label.textContent = fieldName.toUpperCase();
  input.setAttribute('placeholder', fieldName);
}
