'use strict';

const allIputs = document.querySelectorAll('input');

[...allIputs].map(el => {
  const names = el.name[0].toUpperCase()
  + el.name.slice(1).replace(/([A-Z])/g, ' $1');

  el.placeholder = `${names}`;

  el.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${el.id}">
    ${names.toUpperCase()}
  </label>
  `);
});
