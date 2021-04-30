'use strict';

const inputs = document.getElementsByTagName('input');
const field = document.getElementsByClassName('field');

for (let i = 0; i < [...inputs].length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', `${[...inputs][i].id}`);
  label.textContent = `${[...inputs][i].name}`;

  [...inputs][i].setAttribute('placeholder',
    `${[...inputs][i].name.toUpperCase()}`);
  [...field][i].append(label);
};
