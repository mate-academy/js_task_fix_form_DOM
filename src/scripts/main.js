'use strict';

// write code here
const inputs = document.querySelectorAll('input');

const formatName = (inputName) => {
  let formatedName = inputName[0].toUpperCase();

  for (let i = 1; i < inputName.length; i++) {
    const char = inputName[i];

    if (char.toUpperCase() === char) {
      formatedName += ` `;
    }

    formatedName += char;
  }

  return formatedName;
};

inputs.forEach((input) => {
  const inputName = formatName(input.name);

  const label = `
    <label class="field-label" for="${input.id}">
      ${inputName}
    </label>
  `;

  input.placeholder = inputName;

  input.closest('.field').insertAdjacentHTML('afterbegin', label);
});
