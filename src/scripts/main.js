'use strict';

const parent = document.querySelectorAll('.field');
const fields = document.querySelectorAll('.field-text');

fields.forEach((input, index) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = input.name;

  parent[index].append(label);
});
