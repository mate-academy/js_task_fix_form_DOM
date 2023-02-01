'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.className = 'field-label';

  input.placeholder = input.name.substring(0, 1)
    .toLocaleUpperCase() + input.name.substring(1);

  label.htmlFor = input.id;
  label.textContent = input.placeholder;

  input.parentElement.append(label);
}
