'use strict';

const form = document.querySelector('form');

const inputs = [...form.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.placeholder = input.name[0].toLocaleUpperCase() + input.name.slice(1);
  input.parentElement.append(label);
}
