'use strict';

const allInput = [...document.querySelectorAll('input')];

for (const element of allInput) {
  const label = document.createElement('label');
  const thisDiv = element.parentNode;

  element.placeholder = element.name;
  element.style.textTransform = `Capitalize`;
  label.textContent = element.name;
  label.htmlFor = element.id;
  label.classList.add('field-label');

  if (element.name.includes('Name')) {
    element.placeholder = element.placeholder.replace(/Name/g, ' Name');
    label.textContent = label.textContent.replace(/Name/g, ' Name');
  }

  thisDiv.prepend(label);
}
