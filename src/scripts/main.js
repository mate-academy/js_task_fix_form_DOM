'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  input.name = input.name.split('N').join(' N');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name.replace(
    input.name[0], input.name[0].toUpperCase()
  );
  input.parentElement.append(label);
}
