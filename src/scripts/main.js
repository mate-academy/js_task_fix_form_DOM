'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs
  .forEach(elem => elem
    .setAttribute('placeholder',
      elem.name.slice(0, 1).toUpperCase() + elem.name.slice(1)));

inputs.forEach(input => input.insertAdjacentHTML('afterend', `
  <label for="${input.id}" class="field-label">
    ${input.name}
  </label>
`));
