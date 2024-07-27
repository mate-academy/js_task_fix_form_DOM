'use strict';

// write code here
const fields = document.getElementsByClassName('field-text');

function goToUpperCase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function splitName(nameText) {
  if (nameText.endsWith('Name')) {
    return nameText.slice(0, -4) + ' ' + nameText.slice(-4);
  }
}

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('label');
  const nameField = fields[i].getAttribute('name');
  const id = fields[i].getAttribute('id');

  label.setAttribute('for', id);
  label.setAttribute('class', 'field-label');
  fields[i].setAttribute('placeholder', splitName(goToUpperCase(nameField)));
  label.textContent = nameField.toUpperCase();

  fields[i].insertAdjacentElement('beforebegin', label);
}
