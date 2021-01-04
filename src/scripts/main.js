'use strict';

const list = document.querySelectorAll('input');

for (const input of list) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.innerText = input.name;
  input.after(label);

  label.setAttribute('for', input.getAttribute('id'));

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
