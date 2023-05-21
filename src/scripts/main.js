'use strict';

const allInput = document.querySelectorAll('input');

for (const input of allInput) {
  const value = input.name;
  const firLetter = value.charAt(0).toUpperCase();
  const res = firLetter + value.slice(1);

  const lab = document.createElement('label');

  lab.for = value;
  lab.className = 'field-label';
  lab.textContent = value;

  input.before(lab);
  input.setAttribute('placeholder', res);
}
