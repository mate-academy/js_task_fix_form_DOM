'use strict';

function spaceBetweenWord(word) {
  return word
    .split('')
    .map(letter => letter === letter.toUpperCase()
      ? ' ' + letter
      : letter)
    .join('');
}

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const { id, name: inputName } = input;
  const label = `
    <label for='${id}' class='field-label'>
      ${spaceBetweenWord(inputName)}
    </label>
  `;
  const placeholder = inputName[0].toUpperCase()
    + spaceBetweenWord(inputName).slice(1).toLowerCase();

  input.insertAdjacentHTML('beforebegin', label);
  input.setAttribute('placeholder', placeholder);
});
