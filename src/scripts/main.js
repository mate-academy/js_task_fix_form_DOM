'use strict';

// write code here
const fields = document.querySelectorAll('.field');

for (const field of [...fields]) {
  const input = field.querySelector('input');
  const inputType = input.getAttribute('type');
  const inputId = input.getAttribute('id');
  let inputName = input.getAttribute('name');
  let inputPlaceholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  if (inputName.toLowerCase().includes('name')) {
    inputName = inputName.toLowerCase().split('name').join(' name');
  }

  if (inputPlaceholder.toLowerCase().includes('name')) {
    const placeholderText = inputPlaceholder
      .toLowerCase()
      .split('name')
      .join(' Name');

    inputPlaceholder = placeholderText
      .charAt(0)
      .toUpperCase()
      + placeholderText.slice(1);
  }

  field.innerHTML = `
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
