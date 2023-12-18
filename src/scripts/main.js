'use strict';

const divs = document.querySelectorAll('.field');

[...divs].forEach(div => {
  const input = div.children[0];
  const inputName = input.name.split(/(?=[A-Z])/).join(' ');

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  div.insertAdjacentHTML('beforeend', `
  <label
    class="field-label"
    for=${input.id}
  >
    ${input.name}
  </label>
`);
});
