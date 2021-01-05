'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const placeholder = inputs[i].name.replace(/Name/, ' Name');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputs[i].id);
  label.innerText = placeholder;

  inputs[i].setAttribute('placeholder',
    placeholder.slice(0, 1).toUpperCase() + placeholder.slice(
      1, placeholder.length));

  inputs[i].parentNode.appendChild(label);
}
