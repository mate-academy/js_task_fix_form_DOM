'use strict';

const form = document.querySelectorAll('form');
const input = form[1].querySelectorAll('input');

input.forEach(key => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = key.id;
  label.textContent = key.name;

  key.placeholder = (key.name.slice(0, 1)).toLocaleUpperCase()
   + key.name.slice(1);

  key.before(label);
}
);
