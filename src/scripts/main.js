'use strict';

const input = [...document.querySelectorAll('input')];

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input[i].id);
  label.textContent = input[i].name.toUpperCase();

  input[i].placeholder = input[i]
    .name[0].toUpperCase() + input[i].name.slice(1);

  input[i].parentElement.append(label);
}
