'use strict';

const inputs = document.querySelectorAll('input');

for (const element of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', element.id);
  label.textContent = element.name;

  element.placeholder = element.name[0].toUpperCase() + element.name.slice(1);
  element.parentElement.append(label);
}
