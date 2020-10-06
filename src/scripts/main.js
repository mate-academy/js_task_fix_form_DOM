'use strict';

const inputs = document.querySelectorAll('.field-text');
const parent = document.querySelectorAll('.field');

inputs.forEach((item, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = item.id;
  label.textContent = item.name;

  parent[index].append(label);

  let placeholder = item.name.replace(/([A-Z])/g, ` $1`).toLowerCase();

  placeholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

  item.placeholder = placeholder;
});
