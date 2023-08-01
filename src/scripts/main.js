'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = `
    <label
      for="${input.id}"
      class="field-label"
    >
      ${input.name}
    </label>
  `;

  input.insertAdjacentHTML('beforebegin', label);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
});
