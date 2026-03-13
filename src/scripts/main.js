'use strict';

const forms = document.getElementsByTagName('form');

for (const form of forms) {
  const inputs = form.getElementsByTagName('input');

  for (const input of inputs) {
    const inputName = input.name;

    input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

    const label = document.createElement('label');

    label.setAttribute('for', input.id);
    label.classList.add('field-label');
    label.textContent = inputName;
    input.before(label);
  }
}
