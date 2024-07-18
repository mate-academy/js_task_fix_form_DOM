'use strict';

const input = [...document.querySelectorAll('input')];

for (const el of input) {
  const lebel = document.createElement('lebel');

  el.setAttribute('placeholder', el.name.toUpperCase());
  lebel.textContent = el.name;
  lebel.className = 'field-label';
  lebel.setAttribute('for', el.id);
  el.before(lebel);
}
