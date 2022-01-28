'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const inputParent = input.parentElement;
  const label = document.createElement('label');

  inputParent.append(label);
  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerText = input.name;
  input.placeholder = toCapitalize(input.name);
}

function toCapitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
