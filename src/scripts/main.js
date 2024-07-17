'use strict';

document.querySelectorAll('input').forEach((el) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.id);
  label.textContent = el.name;

  el.before(label);
  el.placeholder = el.name;
});
