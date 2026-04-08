'use strict';

// write code here

function createLabel(input) {
  const id = input.getAttribute('id');
  const label = document.createElement('LABEL');

  label.innerHTML = input.getAttribute('name');
  label.setAttribute('for', id);
  label.className = 'field-label';
  input.parentNode.append(label);
}

function addPlaceholder(input) {
  const text = capitalize(input.getAttribute('name'));

  input.setAttribute('placeholder', text);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

for (const element of document.querySelectorAll('form input')) {
  createLabel(element);
  addPlaceholder(element);
}
