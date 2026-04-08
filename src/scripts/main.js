'use strict';

const input = [...document.querySelectorAll('input')];

for (const el of input) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', el.id);

  let value = el.name[0].toUpperCase() + el.name.slice(1);

  if (value === 'LastName' || value === 'FirstName') {
    value = value.slice(0, -4).replace(/([A-Z])/g, ' $1');
  }

  label.textContent = value;
  el.setAttribute('placeholder', value);
  el.before(label);
}
