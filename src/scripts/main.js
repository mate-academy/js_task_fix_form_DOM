'use strict';

const allInput = document.querySelectorAll('input');

for (const input of allInput) {
  const value = input.name;
  const firLetter = value.charAt(0).toUpperCase();
  const res = firLetter + value.slice(1);

  const lab = document.createElement('label');

  lab.for = value;
  lab.className = 'field-label';

  let newValue;

  for (let i = 1; i < value.length; i++) {
    if (value[i] === value[i].toUpperCase()) {
      newValue = `${value.substring(0, i)} ${value.substring(i)}`;

      lab.textContent = newValue;
      break;
    }

    lab.textContent = value;
  }

  input.before(lab);
  input.setAttribute('placeholder', res);
}
