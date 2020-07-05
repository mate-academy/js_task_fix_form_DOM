'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(element => {
  element.placeholder = `${element.name.toLowerCase()}`;

  element.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${element.id}">
      ${element.name.toUpperCase()}
    </label>
  `);
});
