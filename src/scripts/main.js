'use strict';

const allInputs = [...document.querySelectorAll('input')];

for (const input of allInputs) {
  const label = document.createElement('label');
  const thisDiv = input.parentNode;

  input.placeholder = input.name;
  input.style.textTransform = `Capitalize`;
  label.textContent = input.name;
  label.htmlFor = input.id;
  label.classList.add('field-label');

  if (input.name.includes('Name')) {
    input.placeholder = input.placeholder.replace(/Name/g, ' Name');
    label.textContent = label.textContent.replace(/Name/g, ' Name');
  }

  thisDiv.prepend(label);
}
