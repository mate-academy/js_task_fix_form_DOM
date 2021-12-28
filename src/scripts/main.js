'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const newEl = document.createElement('label');

  newEl.className = 'field-label';
  newEl.htmlFor = inputs[i].id;
  newEl.textContent = inputs[i].name;
  inputs[i].placeholder = inputs[i].name;

  const thisParent = (inputs[i].parentElement);

  thisParent.append(newEl);
}
