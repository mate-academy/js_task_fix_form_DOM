'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.textContent = input.name;
  item.setAttribute('for', input.id);

  input.parentElement.append(item);

  input.setAttribute('placeholder', input.name.toUpperCase());
}
