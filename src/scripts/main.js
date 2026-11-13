'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.className = 'field-label';

  const NAME = input.name.toLowerCase();
  const text = NAME[0].toUpperCase() + NAME.slice(1);

  label.textContent = text;

  input.parentElement.append(label);

  input.placeholder = text;
}
