'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const inputName = input.name;
  const inputId = input.id;

  input.insertAdjacentHTML(
    'afterend',
    `<label class="field-label" for="${inputId}">${inputName}</label>`,
  );
  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
}
