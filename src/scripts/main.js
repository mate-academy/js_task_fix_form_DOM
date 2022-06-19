'use strict';

const element = document.querySelectorAll('.field-text');

for (const el of element) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.id);
  label.textContent = el.name;
  el.setAttribute('placeholder', el.name[0].toUpperCase() + el.name.slice(1));
  el.closest('.field').append(label);
}
