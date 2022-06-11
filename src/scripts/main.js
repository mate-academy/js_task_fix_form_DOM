'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = `
  <label for="${input.id}" class="field-label">
    ${input.name.includes('Name')
    ? input.name.split('N').join(' n')
    : input.name}
  </label>`;

  input.insertAdjacentHTML('beforebegin', label);

  if (input.name.includes('Name')) {
    const inputValue = input.name.split('N').join(' n');

    input.placeholder = inputValue[0].toUpperCase() + inputValue.slice(1);
  } else {
    input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  }
});
