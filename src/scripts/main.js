'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.parentElement.insertAdjacentHTML(
    'afterbegin',
    `<label class="field-label" for="${input.id}">
    ${input.name.toUpperCase()}
    </label>`
  );

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
