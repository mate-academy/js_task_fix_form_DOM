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
  const inputId = input.id;
  let inputName = input.name;

  if (inputName.endsWith('Name')) {
    inputName = inputName
      .slice(0, inputName.indexOf('Name'))
      .concat(' ')
      .concat('Name');
  }

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
