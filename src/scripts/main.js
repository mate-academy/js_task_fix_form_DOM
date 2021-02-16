'use strict';

// write code here
const div = [...document.querySelectorAll('.field')];

for (const element of div) {
  const input = element.firstElementChild;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.append(label);

  input.placeholder = input.name.charAt(0).toUpperCase()
    + input.name.slice(1);

  element.append(label);
}
