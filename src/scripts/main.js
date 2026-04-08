'use strict';

const inputs = [...document.body.querySelectorAll('input')];

inputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
      ${formatingName(input.name).toUpperCase()}
    </label>
  `);

  input.placeholder = formatingName(input.name);
});

function formatingName(inputName) {
  const result = inputName
    .split('')
    .map(word => (word === word.toUpperCase())
      ? ' ' + word
      : word);

  result.splice(0, 1, result[0].toUpperCase());

  return result.join('');
}
