'use strict';

const inputsList = document.querySelectorAll('input');

for (const inputEl of inputsList) {
  const labelEl = document.createElement('label');

  labelEl.className = 'field-label';
  labelEl.setAttribute('for', inputEl.id);
  labelEl.textContent = inputEl.name;

  inputEl.placeholder
  = inputEl.name.charAt(0).toUpperCase() + inputEl.name.slice(1);
  inputEl.parentElement.append(labelEl);
}
