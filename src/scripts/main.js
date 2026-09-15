'use strict';

const inputElements = document.querySelectorAll('input');

for (const input of inputElements) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.parentElement.append(label);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
