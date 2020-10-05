'use strict';

const inputs = document.querySelectorAll('.field-text');
const parent = document.querySelectorAll('.field');

inputs.forEach((item, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = item.id;
  label.textContent = item.getAttribute('name');

  parent[index].append(label);

  let placeholder = item.name[0].toUpperCase() + item.name.slice(1);

  placeholder = placeholder.replace('N', ' n');

  item.placeholder = placeholder;
});
