'use strict';

const inputs = document.querySelectorAll('input');

// Create label and append to input container
inputs.forEach((input) => {
  const label = `
  <label for="${input.id}" class="field-label">
    ${input.name}
  </label>`;

  input.insertAdjacentHTML('beforebegin', label);
});

// Set placeholder for each input
inputs.forEach(input => {
  if (input.name.includes('Name')) {
    const inputValue = input.name.split('N').join(' n');

    input.placeholder = inputValue[0].toUpperCase() + inputValue.slice(1);
  } else {
    input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  }
});
