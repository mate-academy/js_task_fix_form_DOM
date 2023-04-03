'use strict';

// write code here
const divs = document.querySelectorAll('.field');

for (const div of [...divs]) {
  const input = div.querySelector('input');
  const inputType = input.getAttribute('type');
  const inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');
  const inputPlaceholder = inputName.toUpperCase();

  div.innerHTML = `
  <input
    type="${inputType}"
    name="${inputName}"
    class="field-text"
    autocomplete="off"
    id="${inputId}"
    placeholder="${inputPlaceholder}"
    autofocus
  >
  <label class="field-label" for="${inputId}"> ${inputName} </label>
  `;
}
