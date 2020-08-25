'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const name = (!input.name.includes('Name'))
    ? input.name
    : input.name.split('Name')[0] + ' Name';

  input.insertAdjacentHTML('afterend', `
    <label class=field-label for=${input.id}>${name}</label>
  `);

  const capitalazedPlaceholder = (!input.id.includes('name'))
    ? input.name[0].toUpperCase() + input.name.slice(1)
    : input.name.split('Name')[0][0].toUpperCase()
     + input.name.split('Name')[0].slice(1)
     + ` Name`;

  input.placeholder = capitalazedPlaceholder;
};
