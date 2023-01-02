'use strict';

const inputs = document.querySelectorAll('input');

for (const item of inputs) {
  const label = document.createElement('label');
  const inputId = item.getAttribute('id');
  const inputName = item.getAttribute('name');

  label.className = 'field-label';
  label.htmlFor = inputId;
  label.textContent = inputName;

  item.setAttribute('placeholder', inputName[0].toLocaleUpperCase()
    + inputName.slice(1));

  item.parentElement.append(label);
}
