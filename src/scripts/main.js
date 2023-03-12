'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('afterEnd', `
      <label
        class="field-label"
        for=${input.id}
      >
        ${capitalize(input.name)}
      </label>
    `);

  input.placeholder = capitalize(input.name);
}

function capitalize(named) {
  return (named.charAt(0).toUpperCase()
    + named.slice(1).replace(/([A-Z])/g, ' $1'));
}
