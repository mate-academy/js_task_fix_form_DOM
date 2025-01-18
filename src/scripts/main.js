'use strict';

// write code here
const fields = document.querySelectorAll('.field');

[...fields].forEach((f) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  f.prepend(label);

  const input = f.children[1];

  label.textContent = input.name;
  label.setAttribute('for', input.id);
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
