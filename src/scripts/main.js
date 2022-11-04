'use strict';

const inputs = document.querySelectorAll('form input');
const label = document.createElement('label');

label.className = 'field-label';

for (const input of inputs) {
  const placeholderText = [...input.name][0]
    .toUpperCase() + input.name.slice(1);

  label.htmlFor = input.id;
  label.textContent = input.name;
  input.setAttribute('placeholder', placeholderText);
  input.closest('.field').prepend(label.cloneNode(true));
}
