'use strict';

// const allDiv = [...document.querySelectorAll('.field')];

const allInput = [...document.querySelectorAll('input')];

for (const element of allInput) {
  const label = document.createElement('label');
  const thisDiv = element.parentNode;

  element.placeholder = element.name;
  element.style.textTransform = `Capitalize`;
  label.textContent = element.name;
  label.htmlFor = element.id;
  label.classList.add('field-label');

  thisDiv.prepend(label);
}
