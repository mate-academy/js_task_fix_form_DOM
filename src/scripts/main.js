'use strict';

const allInput = document.querySelectorAll('input');

for (const input of allInput) {
  const creatLabel = document.createElement('label');

  creatLabel.className = 'field-label';
  creatLabel.htmlFor = input.id;
  creatLabel.textContent = input.name;
  input.before(creatLabel);

  input.placeholder = input.name;
}
