'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach((input) => {
  const formText = input.name.split('').map((letter) => {
    if (letter === letter.toUpperCase()) {
      return ` ${letter}`;
    }

    return letter;
  }).join('');

  input.insertAdjacentHTML(
    'beforebegin',

    `<label class="field-label" for=${input.id}>
    ${formText}
    </label>`
  );

  input.placeholder = formText.substring(0, 1).toUpperCase()
    + formText.substring(1, formText.length);
});
