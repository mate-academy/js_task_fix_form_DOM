'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.setAttribute('for', `${item.getAttribute('name')}`);
  label.textContent = `${item.getAttribute('name')}`;

  item.setAttribute('placeholder', `${item.name.toUpperCase()}`);

  item.before(label);
});
