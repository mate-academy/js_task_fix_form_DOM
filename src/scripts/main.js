'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

for (const input of inputs) {
  const label = document.createElement('label');

  if (input.name && input.name.length > 0) {
    let inputName = input.name[0].toUpperCase();

    inputName += input.name.slice(1);
    input.before(label);
    input.setAttribute('placeholder', inputName);

    label.setAttribute('for', input.id);
    label.textContent = inputName;
    label.classList.add('field-label');
  }
}
