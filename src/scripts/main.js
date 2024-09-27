'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(string) {
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      return `${string.slice(0, 1).toUpperCase() + string.slice(1, i)} `
        + `${string.slice(i)}`;
    }
  }

  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

inputs.forEach(input => {
  const inputName = input.getAttribute('name');

  input.placeholder = capitalize(inputName);

  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for=${input.getAttribute('id')}>
      ${capitalize(inputName).toUpperCase()}
    </label>
  `);
});
