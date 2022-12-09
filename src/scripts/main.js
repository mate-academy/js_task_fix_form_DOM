'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach((input) => {
  input.insertAdjacentHTML(
    'afterbegin',

    `<label class="field-label" for=${input.id}>
    ${input.name}
    </label>`
  );

  input.placeholder = input.name.substring(0, 1).toUpperCase()
    + input.name.substring(1, input.name.length);
});
