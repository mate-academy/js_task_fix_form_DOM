'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((item) => {
  const label = document.createElement('label');

  label.innerHTML = item.name;
  label.htmlFor = item.id;

  let placeholder = item.id.split('-').slice(2).join(' ');

  item.placeholder = rightPlaceholder(placeholder);

  item.parentElement.prepend(label);
});


function rightPlaceholder(item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
}