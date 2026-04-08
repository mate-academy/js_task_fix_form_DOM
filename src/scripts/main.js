'use strict';

const inputs = document.querySelectorAll('form input');
const label = document.createElement('label');

label.className = 'field-label';

for (const input of inputs) {
  if (input.name.includes('Name')) {
    input.name = input.name.slice(0, input.name.indexOf('Name')) + ' ' + 'Name';
  }

  const placeholderText = [...input.name][0]
    .toUpperCase() + input.name.slice(1);

  label.htmlFor = input.id;
  label.textContent = input.name;
  input.setAttribute('placeholder', placeholderText);
  input.closest('.field').prepend(label.cloneNode(true));
}
