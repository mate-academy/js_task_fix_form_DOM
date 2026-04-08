'use strict';

// write code here
const inputs = document.body.querySelectorAll('input');

for (const element of inputs) {
  const labelwrap = document.createElement('label');

  labelwrap.classList.add('field-label');
  element.parentNode.insertBefore(labelwrap, element);

  let insertText = element.getAttribute('name');

  insertText = insertText.replace(/([A-Z])/g, ' $1').toLowerCase();
  labelwrap.textContent = insertText;

  element.setAttribute(
    'placeholder',
    insertText.charAt(0).toUpperCase() + insertText.slice(1),
  );
}
