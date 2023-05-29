'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const formInputs = document.querySelectorAll('form input');

  formInputs.forEach(input => {
    input.parentElement.insertAdjacentHTML('afterbegin',
      `
        <label
          class="field-label"
          for="${input.id}"
        >
          ${input.name}
        </label>
      `
    );

    input.setAttribute(
      'placeholder',
      `${input.name[0].toUpperCase() + input.name.slice(1)}`
    );
  });
});
