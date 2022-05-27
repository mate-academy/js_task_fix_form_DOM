'use strict';

const input = document.querySelectorAll('input');

input.forEach(one => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${one.id}`);
  label.textContent = `${one.name}`;

  const done = one.name;

  one.placeholder = done.toUpperCase();
  one.before(label);
}
);
