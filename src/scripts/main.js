'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.classList.add('field-label');

  let describes = input.getAttribute('name');

  if (/[A-Z]/g.test(describes)) {
    for (let i = 0; i < describes.length; i++) {
      if (/[A-Z]/g.test(describes[i])) {
        describes = describes.slice(0, i) + ' ' + describes.slice(i);
        break;
      }
    }
  }

  label.innerHTML = `${describes}`;

  input.setAttribute(
    'placeholder',
    `${describes[0].toUpperCase() + describes.slice(1)}`,
  );
  input.parentElement.prepend(label);
}
