'use strict';

// write code here
const formsInputs = document.querySelectorAll('input');

const formsInputsList = [...formsInputs];

for (const el of formsInputsList) {
  const tagLabel = document.createElement('label');

  tagLabel.className = 'field-label';
  tagLabel.setAttribute('for', el.id);
  tagLabel.textContent = el.name;

  el.before(tagLabel);
  el.setAttribute('placeholder', el.name);
}
