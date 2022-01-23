'use strict';

// write code here
const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  // eslint-disable-next-line max-len
  input.setAttribute('placeholder', input.name[0].toUpperCase() + input.name.slice(1));
  input.closest('.field').append(label);
}
