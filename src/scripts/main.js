'use strict';

const input = document.querySelectorAll('input');

for (const element of input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = element.id;
  label.textContent = element.name;
  element.parentElement.prepend(label);
}

input.forEach(elem => {
  elem.placeholder = (
    elem.name[0].toUpperCase()
  + elem.name.slice(1).toLowerCase());
});
