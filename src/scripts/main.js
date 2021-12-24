'use strict';

const input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input[i].id);

  input[i].setAttribute('placeholder',
    input[i].name.charAt(0).toUpperCase()
    + input[i].name.slice(1));

  label.textContent = input[i].name;

  input[i].append(label);
}
