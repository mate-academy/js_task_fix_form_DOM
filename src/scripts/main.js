'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const parentEl = input.parentElement;

  parentEl.innerHTML = `
  <label class="field-label"
         for=${input.id}
  >
    ${input.name}
  </label>
  <input type=${input.type} name=${input.name}
         id=${input.id} class=${input.className}
         autocomplete=${input.autocomplete}
         placeholder=${input.name[0].toUpperCase()
          + input.name.slice(1).toLowerCase()}>
  `;
}
