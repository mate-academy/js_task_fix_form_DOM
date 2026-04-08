'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

for (let i = 0; i < inputs.length; i++) {
  let label = document.createElement('label');
  label.setAttribute('for', inputs[i].id);
  label.className = 'field-label';
  label.innerHTML = inputs[i].name.toLocaleUpperCase();
  inputs[i].parentNode.insertBefore(label, inputs[i]);
  inputs[i].placeholder = inputs[i].name.slice(0, 1).toUpperCase() + inputs[i].name.slice(1).toLocaleLowerCase();
}
