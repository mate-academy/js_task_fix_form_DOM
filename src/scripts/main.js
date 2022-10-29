'use strict';

// write code here
const inputs = document.querySelectorAll('input');

const formatName = nameFromInput => {
  let formattedName = nameFromInput[0].toUpperCase();

  for (let i = 1; i < nameFromInput.length; i++) {
    if (nameFromInput[i] === nameFromInput[i].toUpperCase()) {
      formattedName += ' ';
    }

    formattedName += nameFromInput[i];
  }

  return formattedName;
};

inputs.forEach(input => {
  const inputName = formatName(input.name);
  const label = `
    <label class="field-label" for="${input.id}">
      ${inputName}
    </label>
  `;

  input.placeholder = inputName;

  input.closest('.field')
    .insertAdjacentHTML('afterbegin', label);
});
