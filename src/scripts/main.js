'use strict';

const inputs = document.body.querySelectorAll('.field-text');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement(`label`);

  label.className = `field-label`;
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;
  inputs[i].placeholder = inputs[i].name;
  inputs[i].append(label);

  inputs[i].parentNode.append(label);
}
