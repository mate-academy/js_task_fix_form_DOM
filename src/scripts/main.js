'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  input.parentElement.append(label);
  label.textContent = input.name;
  label.className = 'field-label';

  const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);
}
