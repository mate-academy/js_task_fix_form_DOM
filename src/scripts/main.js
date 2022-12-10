'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach((input) => {
  const formtext = (input.name === 'firstName') ? 'first Name' : input.name
    && (input.name === 'lastName') ? 'last Name' : input.name;

  input.insertAdjacentHTML(
    'beforebegin',

    `<label class="field-label" for=${input.id}>
    ${formtext}
    </label>`
  );

  input.placeholder = formtext.substring(0, 1).toUpperCase()
    + formtext.substring(1, formtext.length);
});
