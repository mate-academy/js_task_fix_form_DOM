'use strict';

const inputs = [...document.querySelectorAll('[name]')].slice(1);

for (const input of inputs) {
  input.setAttribute('placeholder', `${(input.name).slice(0, 1).toUpperCase()
    + input.name.slice(1)}`);

  input.parentElement.append(document.createElement('label'));
  input.parentElement.querySelector('label').setAttribute('for', `${input.id}`);
}
