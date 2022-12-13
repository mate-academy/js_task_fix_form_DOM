'use strict';

const input = document.body.querySelectorAll('input');

[...input].forEach(item => {
  const label = document.createElement('label');

  item.before(label);
  label.classList.add('field-label');
  label.setAttribute('for', `${item.id}`);
  label.textContent = `${item.name}`;
  item.setAttribute('placeholder', `${item.name}`);
});
