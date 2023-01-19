'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  let newName = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  if (newName.includes('Name')) {
    newName = `${newName.slice(0, -4)} ${newName.slice(-4)}`;
  }

  // console.log(newName);

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.setAttribute('placeholder', newName);

  input.append(label);
}
