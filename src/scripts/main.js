'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const placeholder = input.name.replace(/[A-Z]/g, ' ' + '$&')
    .replace(/[a-z]/, a => a.toUpperCase());

  input.placeholder = placeholder;

  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');
  label.innerText = placeholder.toUpperCase();

  input.insertAdjacentElement('beforebegin', label);
}
