'use strict';

const inputs = document.querySelectorAll('input');

for (const elem of inputs) {
  const str = elem.getAttribute('name');

  if (!str) {
    continue;
  }

  const namesPlaceholder = str[0].toUpperCase() + str.slice(1);
  const label = document.createElement('label');

  const inputId = elem.id;

  if (inputId) {
    label.setAttribute('for', inputId);
  }

  label.innerHTML = str;
  elem.placeholder = namesPlaceholder;
  elem.before(label);
  label.classList.add('field-label');
}
