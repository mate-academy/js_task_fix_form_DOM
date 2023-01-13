'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labels = document.createElement('label');

  labels.className = 'field-label';
  labels.htmlFor = input.getAttribute('id');
  labels.textContent = input.name;

  input.parentElement.append(labels);

  input.setAttribute(
    'placeholder', `${input.name[0].toUpperCase()}${input.name}`
  );
}
