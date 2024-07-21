'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class='field-label' for=${inputId}>
      ${inputName}
    </label>`,
  );

  input.setAttribute(
    'placeholder',
    `${inputName[0].toUpperCase() + inputName.slice(1)}`,
  );
});
