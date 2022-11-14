'use strict';

const container = document.querySelectorAll('input');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (const child of container) {
  let childName = child.getAttribute('name');
  const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sepatateName = '';

  for (let i = 1; i < childName.length; i++) {
    if (alfabet.includes(childName[i])) {
      sepatateName = childName.slice(0, i) + ' ' + childName.slice(i);
      childName = sepatateName;
      break;
    }
  }

  const childId = child.getAttribute('id');

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = child.getAttribute('name');
  label.setAttribute('for', childId);
  child.setAttribute('placeholder', capitalizeFirstLetter(childName));

  child.parentElement.prepend(label);
}
