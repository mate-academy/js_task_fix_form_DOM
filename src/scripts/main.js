'use strict';

// write code here

const allInputs = document.querySelectorAll('.field-text');

[...allInputs].map(elem =>
  elem.insertAdjacentHTML('beforebegin', `
  <label for="${elem.id}" class="field-label">
    ${elem.name}
  </label>
`));

[...allInputs].map(elem =>
  elem.setAttribute(
    'placeholder', elem.name[0].toUpperCase() + elem.name.slice(1)
  )
);
