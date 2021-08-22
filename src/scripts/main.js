'use strict';

// write code here

const allInput = document.querySelectorAll('input');

for (const item of allInput) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', item.id);

  label.textContent = item.name.split(/(?=[A-Z])/).join(' ').toUpperCase();

  item.before(label);

  const placeHol = item.name.split(/(?=[A-Z])/).join(' ').toLowerCase();

  item.setAttribute('placeholder',
    placeHol.charAt(0).toUpperCase() + placeHol.slice(1));
}
