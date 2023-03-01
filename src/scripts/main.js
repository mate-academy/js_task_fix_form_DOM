'use strict';

const fields = document.querySelectorAll('.field');

[...fields].map(field => {
  const input = field.children[0];

  const placeholder = input.name
    .split('')
    .map((el, i) => i === 0 ? el.toUpperCase() : el)
    .join('');

  input.placeholder = placeholder;

  const labelText = input.name
    .split('')
    .map(el => el.toUpperCase() === el ? ` ${el}` : el)
    .join('');

  field.insertAdjacentHTML('beforeend', `
    <label for=${input.id} class='field-label'>
      ${labelText}
    </label>
  `);
});
