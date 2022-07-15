'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.setAttribute('for', input.id);

  if (input.name === 'firstName') {
    input.name = 'First Name';
  }

  if (input.name === 'lastName') {
    input.name = 'Last Name';
  }

  label.textContent = input.name;

  const placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);

  input.parentNode.append(label);
}
