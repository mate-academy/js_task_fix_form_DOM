'use strict';

const inputs = document.querySelectorAll('input');

[...inputs]
  .map(input => {
    input.insertAdjacentHTML('beforebegin', `
      <label class="field-label" for="${input.id}">
        ${input.name}
      </label>
    `);

    input.setAttribute(
      'placeholder', input.name[0].toUpperCase() + input.name.slice(1)
    );
  });
