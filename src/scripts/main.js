'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => input
  .setAttribute('placeholder', input.name[0]
    .toUpperCase() + input.name.substring(1).toLowerCase()));

[...inputs].forEach(input => input.insertAdjacentHTML('beforebegin', `
  <label for="${input.id}" class="field-label">
    ${input.name}
  </label>
`));
