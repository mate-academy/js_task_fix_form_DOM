'use strict';

const div = document.querySelectorAll('.field');
const input = document.querySelectorAll('input');

for (let i = 0; i < div.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input[i].getAttribute('id'));
  label.textContent = input[i].getAttribute('name');

  div[i].appendChild(label);

  const splitted = input[i].getAttribute('name').split('');

  const firstLetter = splitted[0].toUpperCase();

  splitted.splice(0, 1);

  const result = [firstLetter, ...splitted].join('');

  input[i].placeholder = result;
}
