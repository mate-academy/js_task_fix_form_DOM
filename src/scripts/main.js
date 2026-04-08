'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.textContent = input.name;
  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const nameText = input.name;

  const firstLetter = nameText[0].toUpperCase();
  const otherLetters = nameText.slice(1).toLowerCase();

  input.placeholder = firstLetter + otherLetters;

  const parentContainer = input.parentElement;

  parentContainer.prepend(label);
}
