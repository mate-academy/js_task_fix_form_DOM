'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin', `
    <label
      class="field-label"
      for="${input.id}"
    >
      ${input.name}
    </label>
  `);

  input.placeholder = input.name;
  input.style.cssText = 'text-transform: capitalize;';
});
