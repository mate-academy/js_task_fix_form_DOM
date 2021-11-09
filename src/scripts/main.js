'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  [...form.querySelectorAll('input')].forEach(input => {
    let inputName = input.id.split('-').slice(2).join(' ');

    inputName = inputName[0].toUpperCase() + inputName.slice(1);

    input.placeholder = inputName;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = inputName.toUpperCase();

    input.parentElement.append(label);
  });
}
