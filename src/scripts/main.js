'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  let nameWithSpace = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      nameWithSpace += ' ';
    }
    nameWithSpace += input.name[i];
  }

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = nameWithSpace;
  input.parentElement.prepend(label);

  input.setAttribute('placeholder', nameWithSpace);
}
