'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.setAttribute('placeholder', input.name.slice(0, 1).toUpperCase()
    + input.name.slice(1));
  input.type = 'text';

  const label = document.createElement('label');

  label.className = 'field-label';

  label.htmlFor = input.id;

  label.innerText = input.name;

  input.before(label);
}
