'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('afterend', `
    <label
      class = "field-label"
      for = input.id
    >
      ${capitalize(input.name)}
    </label>
  `);

  input.placeholder = capitalize(input.name);
}

function capitalize(Name) {
  return (Name.charAt(0).toUpperCase()
    + Name.slice(1).replace(/([A-Z])/g, ' $1'));
}
