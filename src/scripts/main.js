'use strict';

const fields = document.querySelectorAll('.field');

for (const element of fields) {
  const inputName = element.children[0].getAttribute('name');

  element.children[0].placeholder = inputName;

  const label = document.createElement('label');

  label.innerHTML = inputName.toUpperCase();
  label.className = `field-label`;
  element.children[0].insertAdjacentElement('beforebegin', label);
}
