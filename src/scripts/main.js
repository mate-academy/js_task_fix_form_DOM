'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const textFormat = input.name.split('N').join(' N');

  input.insertAdjacentHTML('afterend', `
    <label
      class = "field-label"
      for = ${input.id}
    >
      ${textFormat}
    </label>
  `);

  input.style = 'text-transform: capitalize;';
  input.placeholder = textFormat;
}
