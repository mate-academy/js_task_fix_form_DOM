'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  let placeholderName = input.attributes.name.textContent;

  placeholderName = placeholderName.replace(/([A-Z])/g, word => ` ${word}`);
  label.className = 'field-label';
  label.setAttribute('for', input.attributes.id.textContent);

  label.textContent = input.attributes.name.textContent.replace(/([A-Z])/g,
    word => ` ${word}`);
  input.parentElement.append(label);

  input.setAttribute('placeholder', placeholderName[0].toUpperCase()
  + placeholderName.slice(1));
}
