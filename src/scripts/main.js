'use strict';

const listInputs = [...document.querySelectorAll('input')];

for (const input of listInputs) {
  const placeH = (input.name.toLowerCase());

  input.placeholder = placeH[0].toUpperCase() + placeH.slice(1);

  if (input.placeholder === 'Firstname') {
    input.placeholder = 'First name';
  }

  if (input.placeholder === 'Lastname') {
    input.placeholder = 'Last name';
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  input.before(label);
}
