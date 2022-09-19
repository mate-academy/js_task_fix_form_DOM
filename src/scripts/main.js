'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputName = input.name.replace(/[A-Z]/g, letter => ` ${letter}`);

  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for=${input.id}>
      ${inputName.toUpperCase()}
    </label>
  `);

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
});
