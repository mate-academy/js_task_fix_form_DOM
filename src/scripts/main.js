'use strict';

const inputs = [...document.querySelectorAll('form input')];

for (const elem of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = elem.id;
  label.textContent = elem.name;
  elem.parentElement.prepend(label);
}

for (const elem of inputs) {
  elem.placeholder = elem.name[0].toUpperCase() + elem.name.slice(1);
}
