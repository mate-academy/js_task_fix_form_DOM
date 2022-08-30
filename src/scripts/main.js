'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.insertAdjacentHTML(
    'afterend',
    `
    <label for=${input.id} class="field-label">
      ${input.name.toUpperCase()}
    </label>
    `
  );

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
