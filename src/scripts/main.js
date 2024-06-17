'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  let labelName;

  const camelCaseIndex = input.name
    .split('')
    .findIndex((letter) => letter === letter.toUpperCase());

  if (camelCaseIndex > 0) {
    labelName =
      input.name.charAt(0).toUpperCase() +
      input.name.slice(1, camelCaseIndex) +
      ' ' +
      input.name.slice(camelCaseIndex);
  } else {
    labelName =
      input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();
  }

  label.textContent = labelName;
  label.classList.add('field-label');

  input.parentNode.insertBefore(label, input);

  input.setAttribute('placeholder', labelName);
});
