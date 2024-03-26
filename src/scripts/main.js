'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const textFormat = toNormalCase(input.name);

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

function toNormalCase(str) {
  return str.replace(/([A-Z])/g, ' $1');
};
