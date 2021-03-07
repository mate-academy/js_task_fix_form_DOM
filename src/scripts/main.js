'use strict';

// write code here

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = spaceBetweenWords(input.name);

  input.placeholder = spaceBetweenWords(
    capitalizeFirstCharacter(input.name)
  );
  input.parentElement.append(label);
}

function capitalizeFirstCharacter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function spaceBetweenWords(string) {
  return string.replace(/([A-Z])/g, ' $1').trim();
}
