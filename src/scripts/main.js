'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.setAttribute('for', inputs[i].id);
  label.textContent = inputs[i].name;

  inputs[i].append(label);

  const placeholderText = inputs[i].name[0].toUpperCase()
  + inputs[i].name.slice(1);

  inputs[i].setAttribute('placeholder', placeholderText);
}
