'use strict';

const inputs = document.querySelectorAll('input');

// Create label and append to input container
inputs.forEach((input) => {
  const label = `
  <label for="${input.id}" class="field-label">
    ${input.name}
  </label>`;

  input.parentElement.insertAdjacentHTML('afterbegin', label);
});

// Set placeholder for each input
inputs.forEach(input => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
});
