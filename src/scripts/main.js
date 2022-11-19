'use strict';

const setCorrectName = (text) => text
  .replace(/([A-Z])/g, ' $1')
  .toLowerCase()
  .replace(text[0], text[0].toUpperCase());

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach(input => {
  const lable = document.createElement('label');

  lable.classList.add('field-label');
  lable.htmlFor = input.id;
  lable.textContent = setCorrectName(input.name);
  input.parentElement.prepend(lable);

  input.placeholder = setCorrectName(input.name);
});
