'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelText = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
  
  input.insertAdjacentHTML('afterend', `<label class="field-label" for="${input.id}">${labelText}</label>`);
  
  input.placeholder = labelText;
}
