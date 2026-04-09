'use strict';

const inputs = document.querySelectorAll('input');
const inputClass = 'field-label';
const makeCapitalizes = (word = '') => {
  if (word.length > 0) {
    return (
      word.charAt(0).toUpperCase() + word.slice(1)
    );
  }

  return word;
};

inputs.forEach(input => {
  const { id, name: nameInput } = input;
  const inputId = id;
  const inputName = (nameInput).endsWith('Name')
    ? (nameInput.slice(0, nameInput.indexOf('Name'))
      .concat(' ')
      .concat('Name'))
    : (nameInput);

  input.insertAdjacentHTML('beforebegin', `
    <label
      class="${inputClass}"
      for="${inputId}"
    >
    ${inputName}
    </label>
  `);

  input.placeholder = makeCapitalizes(inputName);
});
