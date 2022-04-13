'use strict';

// write code here
const inputs = document.querySelectorAll('input');

// console.log(inputs);

[...inputs].forEach(element => element.setAttribute('placeholder',
  element.name[0].toUpperCase() + element.name.substring(1).toLowerCase()));

[...inputs].forEach(element => element.insertAdjacentHTML('beforebegin', `
  <label for="${element.id}" class="field-label">
    ${element.name}
  </label>
`));
