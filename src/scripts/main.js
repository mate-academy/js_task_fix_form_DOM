'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

const capitalize = (s) =>
  s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : '';

let counter = 0;

for (const el of inputs) {
  if (el.name) {
    const text = capitalize(el.name);

    el.placeholder = text;

    if (!el.id) {
      el.id = `${el.name}-${counter++}`;
    }

    const lab = document.createElement('label');
    lab.setAttribute('for', el.id);
    lab.textContent = text;
    lab.classList.add('field-label');

    el.parentElement.appendChild(lab);
  }
}
