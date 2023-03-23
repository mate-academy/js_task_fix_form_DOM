'use strict';

// write code here
const inputs = document.getElementsByTagName('input');

[...inputs].forEach(input => {
  const placeholder = input.name
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  input.placeholder = placeholder;

  input.insertAdjacentHTML('beforebegin', `
    <label for="${input.id}" class="field-label">${placeholder}</label>
  `);
});
