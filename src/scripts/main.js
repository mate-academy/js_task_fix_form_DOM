'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const inputName = input.getAttribute('name').toUpperCase();
  const inputId = input.getAttribute('id');
  const label = `
    <label for='${inputId}' class='field-label'>
      ${inputName}
    </label>
  `;

  input.insertAdjacentHTML('beforebegin', label);

  input.setAttribute('placeholder',
    inputName[0] + inputName.slice(1).toLowerCase());
});
