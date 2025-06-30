'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', inputs[i].id);

  const text = inputs[i].name;

  label.textContent = text;

  inputs[i].parentNode.appendChild(label);

  inputs[i].placeholder = text[0].toUpperCase() + text.slice(1);
}
