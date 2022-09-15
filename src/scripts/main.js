'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputName = input.name.replace(/[A-Z]/g, (letter) => ` ${letter}`);

  input.parentElement.insertAdjacentHTML(
    'afterbegin',
    `<label class="field-label" for="${input.id}">
    ${inputName.toUpperCase()}
    </label>`
  );

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
}
