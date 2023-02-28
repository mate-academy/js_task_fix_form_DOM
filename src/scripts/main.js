'use strict';

const fields = document.querySelectorAll('.field');

[...fields].map(field => {
  const input = field.children[0];

  const placeholder = input.name
    .split('')
    .map((el, i) => i === 0 ? el.toUpperCase() : el)
    .join('');

  input.placeholder = placeholder;

  field.insertAdjacentHTML('beforeend', `
    <label for=${input.id} class='field-label'>
      ${input.name}
    </label>
  `);
});
