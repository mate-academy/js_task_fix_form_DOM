'use strict';

const input = document.querySelectorAll('input');

for (const element of input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = element.id;
  label.textContent = element.name;
  element.parentElement.prepend(label);
}

input.forEach(item => {
  item.placeholder = (
    item.name[0].toUpperCase()
  + item.name.slice(1).toLowerCase());
});
