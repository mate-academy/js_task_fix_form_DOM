'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputName = input.name
    .replace(/[A-Z]/g, letter => ` ${letter}`);

  input.insertAdjacentHTML('afterend', `
    <label for=${input.id} class="field-label">
      ${inputName.toUpperCase()}
    </label>
  `);

  input.placeholder = inputName.charAt(0).toUpperCase()
    + inputName.slice(1);
});
