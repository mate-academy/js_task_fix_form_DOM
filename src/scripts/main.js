'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.setAttribute('for', inputs[i].id);
  label.textContent = inputs[i].name;

  inputs[i].append(label);

  let text = inputs[i].name.replace(/([A-Z])/g, ' $1');

  text = text[0].toUpperCase() + text.slice(1);

  inputs[i].setAttribute('placeholder', text);
}
