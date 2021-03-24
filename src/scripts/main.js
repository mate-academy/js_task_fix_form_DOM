'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name.replace(/([A-Z]+)/g, ' $1');
  label.className = 'field-label';

  const placeholder = inputs[i].name[0].toUpperCase()
  + inputs[i].name.slice(1).replace(/([A-Z]+)/g, ' $1');

  inputs[i].placeholder = placeholder;
  inputs[i].parentElement.prepend(label);
}
