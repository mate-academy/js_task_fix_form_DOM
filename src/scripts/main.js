'use strict';

const fields = document.querySelectorAll('.field');

[...fields].map(field => {
  const input = field.children[0];

  const text = input.name.split('').map((char, i) => {
    if (i === 0) {
      return char.toUpperCase();
    }

    if (i !== 0 && char.toUpperCase() === char) {
      return ` ${char}`;
    }

    return char;
  }).join('');

  input.placeholder = text;

  field.insertAdjacentHTML('beforeend', `
    <label for=${input.id} class='field-label'>
      ${text}
    </label>
  `);
});
