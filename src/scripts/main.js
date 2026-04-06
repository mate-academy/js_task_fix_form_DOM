'use strict';

// write code here
const elements = document.getElementsByTagName('input');
const inputParents = document.getElementsByClassName('field');
const labels = document.getElementsByTagName('label');

for (const element of elements) {
  const label = document.createElement('label');

  label.className = 'field-label';

  const inputId = element.id;
  const inputName = element.name;

  label.textContent = inputName;
  label.setAttribute('for', inputId);

  element.setAttribute('placeholder', inputName.toUpperCase());
}

for (let i = 0; i < inputParents.length; i++) {
  inputParents[i].appendChild(labels[i]);
}
