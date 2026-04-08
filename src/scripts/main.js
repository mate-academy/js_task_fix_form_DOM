'use strict';

// write code here

const inputs = [...document.querySelectorAll('form input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const capitalizedName = input.name[0].toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = capitalizedName;

  input.placeholder = capitalizedName;
  input.parentNode.append(label);
}
