'use strict';

const container = document.querySelectorAll('input');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (const child of container) {
  const childName = child.getAttribute('name');
  const childId = child.getAttribute('id');

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = child.getAttribute('name');
  label.setAttribute('for', childId);
  child.setAttribute('placeholder', capitalizeFirstLetter(childName));

  child.parentElement.prepend(label);
}
