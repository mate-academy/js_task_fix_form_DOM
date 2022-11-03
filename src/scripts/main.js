'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputName = input.name.split(/(?=[A-Z])/).join(' ');

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class="field-label" for="${input.id}">
      ${inputName}
    </label>`
  );

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
});
