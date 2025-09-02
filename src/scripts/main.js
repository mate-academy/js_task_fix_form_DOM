'use strict';

const forms = document.querySelectorAll('form');

for (let i = 0; i < forms.length; i++) {
  const inputs = forms[i].querySelectorAll('input');

  for (let j = 0; j < inputs.length; j++) {
    const input = inputs[j];

    if (!input.id) {
      input.id = `input-${i}-${j}`;
    }

    if (input.parentNode.querySelector(`label[for="${input.id}"]`)) {
      continue;
    }

    if (!input.name) {
      continue;
    }

    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    label.textContent = text;
    input.placeholder = text;

    input.parentNode.appendChild(label);
  }
}
