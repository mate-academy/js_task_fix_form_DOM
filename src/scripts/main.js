'use strict';

const input = document.querySelectorAll('input');

for (const el of input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.id);
  label.textContent = el.name;
  el.parentElement.prepend(label);

  el.setAttribute('placeholder', el.name.toUpperCase());
}
