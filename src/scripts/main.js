'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.textContent = inputs[i].id;
  label.innerText = inputs[i].name;
  label.className = 'field-label';

  const placeholder = inputs[i].name[0].toUpperCase() + inputs[i].name.slice(1);

  inputs[i].placeholder = placeholder;
  inputs[i].parentElement.prepend(label);
}
