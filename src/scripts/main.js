'use strict';

const inputs = [...document.querySelectorAll('form input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const nameArr = input.name.split(/(?=[A-Z])/);
  const formatted = nameArr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = formatted;
  input.parentElement.append(label);
  input.placeholder = formatted;
}
