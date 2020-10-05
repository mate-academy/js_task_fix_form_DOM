'use strict';

const inputs = document.querySelectorAll('input');
const parent = document.querySelectorAll('.field');

inputs.forEach((item, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = item.id;
  label.textContent = item.getAttribute('name');

  parent[index].insertBefore(label, item);

  let placeholder = item.getAttribute('name').toLowerCase().split('');

  placeholder[0] = placeholder[0].toUpperCase();
  placeholder = placeholder.join('');

  item.setAttribute('placeholder', placeholder);
});
