'use strict';

const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  let placeholder = inputs[i].name.replace(/([a-z])([A-Z])/g, '$1 $2');

  placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  inputs[i].placeholder = placeholder;

  const label = document.createElement('label');

  label.for = inputs[i].id;
  label.textContent = placeholder;
  label.className = 'field-label';

  inputs[i].parentElement.prepend(label);
}
