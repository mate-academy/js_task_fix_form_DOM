'use strict';

const inputs = document.querySelectorAll('form input');

for (const element of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', element.id);
  label.textContent = getFirstUpperChar(element.name);
  element.placeholder = getFirstUpperChar(element.name);
  element.parentElement.insertBefore(label, element);
}

function getFirstUpperChar(name) {
  const firstChar = name.charAt(0).toUpperCase() + name.slice(1);

  return firstChar;
}
