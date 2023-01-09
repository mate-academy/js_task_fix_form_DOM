'use strict';

const inputs = document.querySelectorAll('input');
// console.log(inputs);

[...inputs].forEach(input => input
  .setAttribute('placeholder', input.name[0]
    .toUpperCase() + input.name.substring(1).toLowerCase()));

[...inputs].forEach(label => label.insertAdjacentHTML(
  'beforebegin', `
  <label for="${label.id}" class="field-label">
    ${label.name}
  </label>`
));
