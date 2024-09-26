'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.innerText = inputs[i].name;
  label.htmlFor = inputs[i].id;

  inputs[i].placeholder = inputs[i].name.charAt(
    0).toUpperCase() + inputs[i].name.slice(1);

  inputs[i].parentElement.appendChild(label);
}
