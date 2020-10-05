'use strict';

const inputs = document.querySelectorAll('input');
const parent = document.querySelectorAll('.field');

inputs.forEach((item, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', item.getAttribute('id'));

  parent[index].insertBefore(label, item);

  let placeholder = item.getAttribute('name').split('');

  placeholder[0] = placeholder[0].toUpperCase();
  placeholder = placeholder.join('');

  item.setAttribute('placeholder', placeholder);
});
