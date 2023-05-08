'use strict';

const formInputs = document.querySelectorAll('input');

[...formInputs].forEach(input => {
  const formLable = document.createElement('label');

  input.placeholder = toCapitalized(input.name);
  formLable.className = 'field-label';
  formLable.htmlFor = input.id;
  formLable.textContent = input.name;
  input.parentElement.append(formLable);
});

function toCapitalized(text) {
  return text[0].toUpperCase() + text.slice(1);
}
