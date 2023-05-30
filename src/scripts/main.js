'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const formInputs = document.querySelectorAll('form input');

  formInputs.forEach(input => {
    let string = input.name[0].toUpperCase();

    for (let i = 1; i < input.name.length; i++) {
      if (input.name[i].toUpperCase() === input.name[i]) {
        string += ' ';
      }
      string += input.name[i];
    }

    input.parentElement.insertAdjacentHTML('afterbegin',
      `
        <label
          class="field-label"
          for="${input.id}"
        >
          ${string}
        </label>
      `
    );

    input.setAttribute(
      'placeholder',
      `${string}`
    );
  });
});
