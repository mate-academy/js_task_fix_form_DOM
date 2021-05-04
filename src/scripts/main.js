'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.innerText = input.name;
  label.htmlFor = input.id;
  input.insertAdjacentHTML('beforebegin', label.outerHTML);
  input.placeholder = input.name;
}
