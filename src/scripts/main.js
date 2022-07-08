'use strict';

const listInput = document.querySelectorAll('input');

[...listInput].forEach(input => {
  const labels = document.createElement('label');

  labels.className = 'field-label';
  labels.htmlFor = input.id;
  labels.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase()
  + input.name.toLowerCase().slice(1);

  input.parentElement.prepend(labels);
});
